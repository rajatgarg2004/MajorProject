const mongoose = require('mongoose');

const timeTableSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    slots: [
        {
            day: {
                type: String,
                enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                required: true,
            },
            startSlot: {
                type: Number,
                required: true,
                min: 0,
                max: 8,
                validate: {
                    validator: (value) => Number.isInteger(value),
                    message: 'Start slot must be an integer between 0 and 8.',
                },
            },
            type: {
                type: String,
                enum: ['Lecture', 'Tutorial', 'Lab'],
                required: true,
            },
        },
    ],
    hall: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true,
    },
}, {
    timestamps: true,
});

const TimeTable = mongoose.model('TimeTable', timeTableSchema);
module.exports = TimeTable;


