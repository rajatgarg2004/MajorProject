
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true,
    unique: true
  },
  building: {
    type: String,
    required: true
  },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
}, {
  timestamps: true
});

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;
