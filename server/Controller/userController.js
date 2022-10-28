const userModel = require("../Model/userModel");
const bookingModel = require("../Model/bookingModel");
const bcrypt = require("bcryptjs");
const googleAuth = require("google-auth-library");
const nodeMail = require("../Config/nodeMailer");
const { verify, sign } = require("jsonwebtoken");

const tokenGenerator = (res, userData) => {
  let jwtKey = process.env.JWT_SECRET_KEY;
  let data = userData?.email;

  const token = sign({ data }, jwtKey, {
    expiresIn: 60 * 60 * 24 * 1000,
  });
  res
    .cookie("access_token", token, {
      // httpOnly: true,
      withCredentials: true,
      sameSite: "lax",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      // secure : process.env.JWT_SECRET_KEY
    })
    .status(200)
    .json({ message: "Logged in successfully", token });
};

module.exports = {
  googleVerify: async (req, res, next) => {
    try {
      const token = req?.body?.googleCredentials;
      // console.log(token, 'from backend google auth');
      if (token) {
        const client = new googleAuth.OAuth2Client(process.env.GOOGLECLIENTID);
        // console.log(client, ' client details from auth2client');
        const userData = await client.verifyIdToken({
          idToken: token,
          audience: process.env.GOOGLECLIENTID,
        });
        // console.log(userData,'data from googleauth after sending token');
        if (!userData) {
          res.status(404).json("no data found");
        }
        if (userData) {
          const existUser = await userModel.findOne({
            email: userData?.payload?.email,
          });
          if (existUser && existUser.emailverified) {
            tokenGenerator(res, existUser);
          } else {
            const {
              given_name: firstname,
              family_name: lastname,
              email,
              email_verified: emailverified,
            } = userData?.payload;

            userModel
              .create({ firstname, lastname, email, emailverified })
              .then((response) => {
                // console.log(response,'rerererere');
                tokenGenerator(res, response);
                // res.status(201).json("user created");
              });
          }
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("Something went wrong");
    }
  },

  signup: async (req, res, next) => {
    console.log(req.body, "reqbodyfromservertosignup");
    try {
      const userData = req?.body; //optional chaining

      //changed googleauthentication to googleverify()

      // if (token) {
      //   const client = new googleAuth.OAuth2Client(process.env.GOOGLECLIENTID);
      //   const userData = await client.verifyIdToken({
      //     idToken: token,
      //     audience: process.env.GOOGLECLIENTID,
      //   });
      //   // console.log(userData);

      //   const {
      //     given_name: firstname,
      //     family_name: lastname,
      //     email,
      //     email_verified: emailverified,
      //   } = userData?.payload;
      //   const user = await userModel.findOne({ email });
      //   if (user) {
      //     res.status(403).json("user exist");
      //     // throw new Error('user already exists')
      //     // throw {status : 403,message : 'user already exists'}   //throwing error to catch block
      //   } else {
      //     userModel
      //       .create({ firstname, lastname, email, emailverified })
      //       .then((response) => {
      //         res.status(201).json("user created");
      //       });
      //   }

      if (userData) {
        let { firstname, lastname, email, password } = userData;

        let userExist = await userModel.findOne({ email });
        // console.log(userExist);
        if (userExist) {
          res.status(403).json("user exists");
        } else {
          let bcryptPassword = await bcrypt.hash(password, 10);
          const user = await userModel.create({
            firstname,
            lastname,
            email,
            password: bcryptPassword,
          });
          console.log("user created", user);
          if (user) {
            const emailVerification = await nodeMail(email);
            console.log(emailVerification);
            res.status(200).json("Check email for verification");
          }
          // res.status(200).json('user created')
        }
      }
    } catch (error) {
      console.log(error);
      //   const statuscode = res.status ? res.status : 500;
      res.status(500).json(error.message);
    }
  },

  verify: async (req, res, next) => {
    const token = req.params.token;
    let jwtKey = process.env.JWT_SECRET_KEY;
    try {
      const verified = verify(token, jwtKey);
      console.log(verified);

      if (verified) {
        userModel
          .findOneAndUpdate(
            { email: verified.data },
            { $set: { emailverified: true } }
          )
          .then((response) => {
            res.status(200).json({ tokenVerified: true });
          });
      }
    } catch (error) {
      console.log(error.message);
    }
  },

  reverify: (req, res, next) => {
    try {
      console.log(req.body);
      const credential = req.body.email;
      nodeMail(credential);
      res.status(200).json({ emailTokenSentAgain: true });
    } catch (error) {
      res.status(500).json("email verification failed");
    }
  },

  login: async (req, res, next) => {
    // console.log(req.body);
    try {
      let userData = req.body;
      console.log(userData);
      if (userData) {
        const userExist = await userModel.findOne({ email: userData.email });
        if (userExist && userExist.emailverified) {
          console.log(userExist);
          // let bcryptPassword = await bcrypt.hash(userData.password,10)
          // const user = await userModel.findOne({password : bcryptPassword})
          const userTrue = await bcrypt.compare(
            userData.password,
            userExist.password
          );
          if (userTrue) {
            tokenGenerator(res, userExist);
            // res.cookie({

            // }).status(200).json('Logged in successfully')
          } else {
            res.status(403).json("Credentials not matching");
          }
        } else {
          res.status(403).json("No user exists");
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("something went wrong");
    }
  },
  authorisation: async (req, res, next) => {
    try {
      const emailVerify = req?.email;
      if (!emailVerify) {
        res.status(403).json("user authorisation failed");
      }
      const user = await userModel.findOne({ email: emailVerify });
      if (user) {
        res.status(200).json({ message: "user authorisation success", user });
      } else {
        res.status(403).json("user authorisation failed");
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  appointmentBooking: async (req, res, next) => {
    try {
      console.log(req.body);
      const { date, time } = req?.body;
      const unavailable = await bookingModel.findOne({$and : [{ bookingTime: time }, { bookingDate : date}, {booked : true}]});
      if (unavailable) {
        res.status(503).json("Current slot is already booked,Try nearby dates");
      } else {
        const booked = await bookingModel.create({
          bookingDate : date,
          bookingTime : time,
          booked: true,
        });
        console.log(booked, "booking success");
        if (booked) {
          res.status(201).json("slot booking is successful");
        } else {
          throw new Error;
        }
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
};
