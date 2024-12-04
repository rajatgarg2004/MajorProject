const Room = require('../models/roomSchema'); // Import the Room model
const Department = require('../models/departmentSchema');
// Get rooms by department
const getRoomByDepartment = async (req, res) => {
    const user = req.user;
    try {
        if (!user || !user.department) {
            return res.status(400).json({ message: 'Department ID not found for user' });
        }
        const rooms = await Room.find({ department: user.department }).populate('department', 'name');
        console.log(rooms);
        if (rooms.length === 0) {
            return res.status(404).json({ message: 'No rooms found for this department' });
        }

        return res.status(200).json({ rooms });
    } catch (err) {
        return res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Get a specific room by ID
const getRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id).populate('department', 'name');

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        return res.status(200).json({ room });
    } catch (err) {
        return res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

module.exports = {
    getRoomByDepartment,
    getRoomById
};
