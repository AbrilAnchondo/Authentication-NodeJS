const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // getting token from headers

  // req.header("x-auth-token"); *deprecated!

  // using the common convention to add 'Bearer' in front of token when sending in the headers
  // extracting only the token part
  //console.log(req.header("Authorization"));

  const authHeader = req.get("Authorization");

  if (!authHeader) {
    const error = new Error("NOT AUTHENTICATED!");
    error.statusCode = 401;
    throw error;
  }

  // const token = req.header("Authorization").split(" ")[1];
  const token = authHeader.split(" ")[1];

  // check token
  if (!token) {
    return res.status(401).json({ message: "Authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded", decoded);
    // payload is put into decoded, taking user out and assing it to req obj
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};
