const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  sid : {type : String, required : true, unique : true},
  role: { type: String, enum: ['student', 'teacher', 'head'], required: true },
  year: { type: Number, required: function() { return this.role === 'student'; } },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
  picture : {type:String},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
