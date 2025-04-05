const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirecturl } = require("../middleware.js");
const { signUp } = require("../controllers/users.js");

const userController = require("../controllers/users.js");

router.route("/signup").get(userController.renderSignUpForm).post(wrapAsync(userController.signUp));
router.route("/login").get(userController.renderLoginForm).post(saveRedirecturl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }) ,userController.logIn);

router.get("/logout", userController.logOut);


module.exports = router;