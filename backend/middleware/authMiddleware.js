const jwt = require("jsonwebtoken");

/**
 * Middleware to protect routes via JWT verification
 */
const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Not authorized, no token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, name, email, role }
    next();
  } catch (error) {
    console.warn("⚠️ Invalid JWT:", error.message);
    return res.status(401).json({ success: false, message: "Not authorized, token invalid or expired" });
  }
};

/**
 * Middleware to restrict access to admins only
 */
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ success: false, message: "Access denied: Administrative privileges required" });
  }
};

module.exports = { protect, adminOnly };
