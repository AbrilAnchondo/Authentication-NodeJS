const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // console.log("request", req);
  const token = req.header("x-auth-token");

  // check token
  if (!token) {
    return res.status(401).json({ message: "Authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // payload is put into decoded, taking user out and assing it to req obj
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};
