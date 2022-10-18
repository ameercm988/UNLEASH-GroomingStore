const userModel = require('../Model/userModel')
const bcrypt = require('bcryptjs')
const googleAuth = require('google-auth-library')


module.exports = {

    signup : async (req, res, next) => {
        console.log(req.body,'reqbodyfromserver')
        try {
            const token = req?.body?.googleCredentials   //optional chaining
            if(token){
                const client = new googleAuth.OAuth2Client(process.env.GOOGLECLIENTID)
                const userData = await client.verifyIdToken({idToken : token, audience : process.env.GOOGLECLIENTID})
                console.log(userData);

                const {given_name : firstname, family_name : lastname, email, email_verified : emailverified} = userData?.payload
                const user = await userModel.findOne({email})
                if(user){
                    res.status(403).json('user exist')
                    // throw new Error('user already exists')
                    // throw {status : 403,message : 'user already exists'}   //throwing error to catch block
                } else {
                    userModel.create({firstname,lastname,email,emailverified}).then((response) => {res.status(201).json('user created')})
                    
                }

            } else {
                const {firstname, lastname, email, password} = req.body
                const user = await userModel.create({firstname, lastname, email, password})
                res.status(200).json({user : user_id, created : true})
            }
        } catch (error) {
            const statuscode = res.status ? res.status : 500

            res.status(statuscode).json(error.message)
        }
    },

    login : async (req, res, next) => {
        try {
           const {email, password} = req.body
           const user = await userModel.find(email)
        } catch (error) {
            
        }
    }
}



// payload: {
//     [0]     iss: 'https://accounts.google.com',
//     [0]     nbf: 1666109741,
//     [0]     aud: '100947371868-oq3sm0s72shpedmikk08f73nclv64co4.apps.googleusercontent.com',
//     [0]     sub: '112684181423287567824',
//     [0]     email: 'ameercm988@gmail.com',
//     [0]     email_verified: true,
//     [0]     azp: '100947371868-oq3sm0s72shpedmikk08f73nclv64co4.apps.googleusercontent.com',
//     [0]     name: 'Ameer C M',
//     [0]     picture: 'https://lh3.googleusercontent.com/a/ALm5wu110wirdcmzKb_gqYESyyJNRMNoqsFdXOzoYhxXqg=s96-c',
//     [0]     given_name: 'Ameer',
//     [0]     family_name: 'C M',
//     [0]     iat: 1666110041,
//     [0]     exp: 1666113641,
//     [0]     jti: '872b10fa460ba382c758260c3c027d270b96d45b'
//     [0]   }