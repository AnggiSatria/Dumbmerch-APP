const { header } = require("express/lib/response");
const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
    const authHeader = req.header("Authorization");
    console.log(authHeader);

    const token = authHeader && authHeader.split(" ")[1]
    console.log("tokenSplit", token);

    if(!token){
        return res.status(401).send(
            {
                message : "access denied"
            }
        )
    }

     try {
         const verified = jwt.verify(token, process.env.SECRET_KEY)
         req.User = verified
         next()


     } catch (error) {
         console.log(error)
         res.status(400).send({message : "Invalid Token"});
     }
} 