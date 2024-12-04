const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Department = require('../models/departmentSchema');
const generateTokenAndSetCookie = require('../utils/generateTokenAndSetCookie');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


const login = async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const sid = payload.name.split(' ')[0];
    const name = payload.name.split(' ').splice(1).join(' ');
    const branch = payload.email.split('.')[1].slice(2, 8);
    const userDetails = {
      name: name,
      sid: sid,
      email: payload.email,
      picture: payload.picture,
    };
    const usertype = payload.email.split('@')[0];
    if (usertype.includes('head')) {
      userDetails.role = 'head'; // If email contains 'head', assign 'head_teacher'
    } else if (!usertype.includes('.')) {
      userDetails.role = 'teacher'; // If email doesn't contain a period, assign 'teacher'
    } else {
      userDetails.role = 'head';
    }
    let year = sid.slice(2, 4);
    const date = new Date();
    const yearLastTwoDigits = date.getFullYear().toString().slice(-2);
    const monthTwoDigits = (date.getMonth() + 1).toString().padStart(2, '0');
    if (monthTwoDigits >= 7) {
      year = yearLastTwoDigits - year + 1;
    } else {
      year = yearLastTwoDigits - year;
    }
    userDetails.year = year;
    userDetails.subjects = [];

    let dept = "";
    if (branch.includes("aero")) {
      dept = "Aerospace Engineering"
    } else if (branch.includes("cse")) {
      dept = "Computer Science & Engineering";
    } else if (branch.includes("ele")) {
      dept = "Electrical Engineering";
    } else if (branch.includes("ece")) {
      dept = "Electronics and Communication Engineering"
    } else if (branch.includes("mech")) {
      dept = "Mechanical Engineering"
    } else if (branch.includes("mett")) {
      dept = "Metallurgical & Materials Engineering";
    } else if (branch.includes("prod")) {
      dept = "Production and Industrial Engineering";
    }
    const department = await Department.findOne({ name: dept });
    userDetails.department = department._id;
    const user = await User.findOne({ email : userDetails.email });
    if (user) {
      await User.updateOne({ _id: user._id }, userDetails, { new: true });
      const token = generateTokenAndSetCookie(userDetails, res);
      console.log(token);
      userDetails.token = token;
      res.json({ message: 'Token is valid', userDetails });
    } else {
      const userNew = await User.create(userDetails);
      const token = generateTokenAndSetCookie(userDetails, res);
      userDetails.token = token;
      res.json({ message: 'Token is valid', userDetails });
    }

  } catch (error) {
    console.error('Error verifying token:', error); // Log the error
    res.status(400).json({ error: 'Invalid Token' });
  }
}

const signup = async (req, res) => {
  try {
    const sid = 'bt21104032';
    const name = 'Rajat Garg';
    const branch = 'ele';
    const userDetails = {
      name: name,
      sid: sid,
      email: 'rajatgarg2004@gmail.com',
    };
    userDetails.role = 'head';
    let year = sid.slice(2, 4);
    const date = new Date();
    const yearLastTwoDigits = date.getFullYear().toString().slice(-2);
    const monthTwoDigits = (date.getMonth() + 1).toString().padStart(2, '0');
    if (monthTwoDigits >= 7) {
      year = yearLastTwoDigits - year + 1;
    } else {
      year = yearLastTwoDigits - year;
    }
    userDetails.year = year;
    userDetails.subjects = [];
    const department = await Department.findOne({ name: "Electrical Engineering" });
    console.log(department);
    userDetails.department = department;
    const user = await User.findOne({ sid });
    if (user) {
      await User.updateOne({ _id: user._id }, userDetails, { new: true });
      const token = generateTokenAndSetCookie(userDetails, res);
      res.json({ message: 'Token is valid', userDetails });
    } else {
      const userNew = await User.create(userDetails);
      const token = generateTokenAndSetCookie(userDetails, res);
      res.json({ message: 'Token is valid', userDetails });
    }
  } catch (error) {
    console.error('Error verifying token:', error); // Log the error
    res.status(400).json({ error: 'Invalid Token' });
  }
}
const deleteUser = async (req, res) => {
  const user = req.user;
  try {
    const data = await User.findByIdAndDelete(user._id);
    if (data) {
      res.json({ message: "User deleted successfully" });
    } else {
      res.json({ message: "User not found" });
    }
  } catch (error) {
    console.error('Error deleting user:', error); // Log the error
    res.status(400).json({ error: 'Error deleting user' });
  }

}
const validateUser = async (req,res)=>{
  const user = req.user;
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    res.json({ role: user.role});
  } catch (error) {
    console.error('Role validation error:', error);
    res.status(403).json({ error: 'Invalid token' });
  }
}
module.exports = {
  login,
  signup,
  deleteUser,
  validateUser
}
