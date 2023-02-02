const jwt = require("jsonwebtoken");

const createTokens = (user) => {
  return jwt.sign({ username: user.username }, "enjfeiuerfdernjifndjdirnkjr", {
    expiresIn: "3d",
  });
};

// const validateToken=(req,res,next)=>
// {
//     const accessToken=req.cookies["access-token"]
//     //access-token name of the cookie
//     if(!accessToken)
//     {
//         return res.status(400).json({error:"User not Authenticated"})
//     }
//     try {
//        const validToken=jwt.verify(accessToken,"enjfeiuerfdernjifndjdirnkjr")
//        if(validToken)
//        {
//         req.authenticated=true
//         // authenticated can be used in any
//         return next ()
//        }
//     } catch (error) {
//         res.status(400).json({error:error})
//     }
// }

module.exports = {
  createTokens,
  // validateToken
};
