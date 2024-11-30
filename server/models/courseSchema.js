const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  credits: {
    type : String,
    required: true,
  },
  year : {
    type: String,
    required : true,
  },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
  description : {type : String}
}, {
  timestamps: true
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;


