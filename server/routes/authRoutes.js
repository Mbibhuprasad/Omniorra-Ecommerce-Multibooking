const express = require("express");
const {
  register,
  login,
  getVendors,
  getUsers,
  getAdmins,
  getUserById,
  updateUserRole,
  deleteUser,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/vendors", getVendors);
router.get("/users", authMiddleware(["admin"]), getUsers);
router.get("/admins", authMiddleware(["admin"]), getAdmins);
router.get("/user/:id", authMiddleware(["admin"]), getUserById);
router.put("/user/:id/role", authMiddleware(["admin"]), updateUserRole);
router.delete("/user/:id", authMiddleware(["admin"]), deleteUser);

module.exports = router;
