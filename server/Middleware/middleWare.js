const { verify } = require("jsonwebtoken");

const userVerify = (req, res, next) => {
  try {
    let token = req?.cookies?.access_token;
    if(!token) throw new Error('token not recieved')
    console.log(token, "token");
    const jwt_key = process.env.JWT_SECRET_KEY;

    const verifiedToken = verify(token, jwt_key);
    if(!verifiedToken) throw new Error('token expired')
    console.log(verifiedToken, "emialreturned");

    req.email = verifiedToken.data;

    next();
  } catch (error) {
    res.status(500).json(error.message)
  }
};

module.exports = userVerify;
