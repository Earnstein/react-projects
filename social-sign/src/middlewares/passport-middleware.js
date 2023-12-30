import { Strategy } from "passport-google-oauth20";
import passport from "passport";
import { config } from "dotenv";
config();

const AUTH_OPTIONS = {
  callbackURL: "/auth/google/callback",
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
};

function verifyCallback(accesstoken, refreshToken, profile, done) {
  console.log("Google profile", profile); // profile contains user data - check in the terminal log
  done(null, profile);
}

const google_strategy = new Strategy(AUTH_OPTIONS, verifyCallback);


const passport_login_validator = passport.authenticate("google", {
  scope: ["email"], // you can specify more scope like profile etc
});


const passport_callback_validator = passport.authenticate("google", {
  failureRedirect: "/failure",
  successRedirect: "/",
  session: false, // session is disable
});

export { google_strategy, passport_login_validator, passport_callback_validator };
