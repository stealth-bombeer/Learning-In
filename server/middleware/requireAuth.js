const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");

const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers;
    
  if (!authorization) {
    console.log('insside auth')
    return res.status(401).json({ error: "Authorization token required" });
  }
  console.log(authorization);
  const accessToken = authorization.split(" ")[1];

  try {
    console.log(accessToken);

    const { username } = jwt.verify(accessToken, "enjfeiuerfdernjifndjdirnkjr");
    console.log(username);

    req.user = await User.findOne({ username }).select("username");
    console.log(req.user);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
