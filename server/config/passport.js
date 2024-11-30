const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');
const jwt = require('jsonwebtoken'); // JWT library

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
},
async (accessToken, refreshToken, profile, done) => {
  const { email, name } = profile._json;

  let user = await User.findOne({ email });

  // Determine the role based on the email pattern
  let role = 'student'; // Default role
  
  if (email.includes('head')) {
    role = 'head_teacher'; // If email contains 'head', assign 'head_teacher'
  } else if (!email.includes('.')) {
    role = 'teacher'; // If email doesn't contain a period, assign 'teacher'
  } else if (email.match(/\.bt\d{2}/)) {
    role = 'student'; // If email has a period and .bt, assign 'student'
  }

  // If the user doesn't exist, create one
  if (!user) {
    user = new User({
      name,
      email,
      role, // Assign the role
    });
    await user.save();
  }

  // Create JWT token after user login
  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' } // Set token expiry
  );

  // Pass both the user and the JWT token in the callback
  done(null, { user, token });
}));

// Serialize user into the session
passport.serializeUser((user, done) => done(null, user.user.id));

// Deserialize user out of the session
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
