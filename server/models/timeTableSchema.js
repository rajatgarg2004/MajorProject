const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  day: { type: String, required: true, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
  periods: [
    {
      subject: { type: String, required: true },
      time: { type: String, required: true },
      teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      year: { type: Number, required: true }
    }
  ]
});

const Timetable = mongoose.model('Timetable', timetableSchema);

module.exports = Timetable;
