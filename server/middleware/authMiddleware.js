const jwt = require("jsonwebtoken");

// Middleware to check if user is authenticated
const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
      if (!token) {
        return res.status(401).json({ message: "No token provided" });
      }

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // attach user info (id, role) to request

      // If roles array is not empty → check role
      if (roles.length && !roles.includes(req.user.role)) {
        return res
          .status(403)
          .json({ message: "Access denied: Unauthorized role" });
      }

      next(); // continue if ok
    } catch (err) {
      res.status(401).json({ message: "Invalid or expired token" });
    }
  };
};

module.exports = authMiddleware;
