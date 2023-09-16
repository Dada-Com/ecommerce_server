const express = require("express");
const {
  createUser,
  loginUser,
  checkAuth,
  logout,
  resetPasswordRequest,
  resetPassword,
} = require("../controller/AuthController");
const passport = require("passport");

const router = express.Router();
//  /auth is already added in base path
router
  .post("/signup", createUser)
  .post("/login", passport.authenticate("local"), loginUser)
  .get("/check", passport.authenticate("jwt"), checkAuth)
  .post("/reset-password-request", resetPasswordRequest)
  .post("/reset-password", resetPassword)
  .get("/logout", logout);
exports.router = router;