// const Timetable = require('../models/Timetable'); // Import Timetable model

// Fetch timetable for a student (based on year/subjects)
const getTimetableForStudent = async (req, res) => {
  try {
    const { year } = req.query;

    if (!year) {
      return res.status(400).json({
        success: false,
        message: 'Year is required',
      });
    }

    const timetable = await Timetable.find({ year });

    if (!timetable || timetable.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No timetable found for year ${year}`,
      });
    }

    res.status(200).json({
      success: true,
      message: `Timetable for year ${year}`,
      timetable,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};

// Fetch timetable for a teacher (based on the subject they teach)
const getTimetableForTeacher = async (req, res) => {
  try {
    const { subject } = req.params; 

    if (!subject) {
      return res.status(400).json({
        success: false,
        message: 'Subject is required',
      });
    }

    const timetable = await Timetable.findOne({ subject });

    if (!timetable) {
      return res.status(404).json({
        success: false,
        message: `No timetable found for subject ${subject}`,
      });
    }

    res.status(200).json({
      success: true,
      message: `Timetable for subject ${subject}`,
      timetable,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};

const modifyTimetable = async (req, res) => {
  try {
    const { year, subject, schedule } = req.body; 
    if (!year || !subject || !schedule) {
      return res.status(400).json({
        success: false,
        message: 'Year, subject, and schedule are required',
      });
    }

    const timetable = await Timetable.findOne({ year, subject });

    if (!timetable) {
      const newTimetable = await Timetable.create({ year, subject, schedule });

      return res.status(201).json({
        success: true,
        message: 'Timetable created successfully',
        timetable: newTimetable,
      });
    }

    timetable.schedule = schedule;
    await timetable.save();

    res.status(200).json({
      success: true,
      message: 'Timetable updated successfully',
      timetable,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};

const test = (req,res)=>{
  return res.status(201).json({
    success: true,
    message: 'Timetable created successfully',
    timetable: 'hello',
  });
}
module.exports = {
  getTimetableForStudent,
  getTimetableForTeacher,
  modifyTimetable,
  test
}