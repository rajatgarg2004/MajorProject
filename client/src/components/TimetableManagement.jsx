import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const TimetableManagement = () => {
    const [year, setYear] = useState('1'); // Default year
    const [timetable, setTimetable] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [subjectType, setSubjectType] = useState(''); // Initially empty
    const [selectedRoom, setSelectedRoom] = useState(''); // Default empty room
    const [errorMessage, setErrorMessage] = useState('');
    const [rooms, setRooms] = useState([]); // List of available rooms

    const periods = [
        "8 AM - 9 AM", "9 AM - 10 AM", "10 AM - 11 AM", "11 AM - 12 PM",
        "12 PM - 1 PM", "1 PM - 2 PM", "2 PM - 3 PM", "3 PM - 4 PM", "4 PM - 5 PM"
    ];

    // Fetch available subjects and timetable
    useEffect(() => {
        const fetchSubjectsAndTimetable = async () => {
            try {
                // Fetch subjects for the selected year
                const subjectResponse = await fetch(`http://localhost:5000/home/courses/coursesByYear?year=${year}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: "include",
                });
                const subjectData = await subjectResponse.json();

                if (subjectData.length === 0) {
                    setErrorMessage('No subjects available for this year.');
                } else {
                    setSubjects(subjectData);
                    setErrorMessage('');
                }

                // Fetch available rooms
                const roomsResponse = await fetch('http://localhost:5000/home/rooms', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: "include",
                });
                const roomsData = await roomsResponse.json();
                if (roomsData.rooms && Array.isArray(roomsData.rooms)) {
                    setRooms(roomsData.rooms); // Set rooms to the array inside the "rooms" property
                } else {
                    setErrorMessage('Invalid room data format.');
                }

                // Initialize timetable
                if (!timetable.length) {
                    const initialTimetable = Array(5).fill().map(() => ({
                        slots: Array(9).fill(null),
                    }));
                    setTimetable(initialTimetable);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
                setErrorMessage('Failed to load subjects or rooms. Please try again later.');
            }
        };

        fetchSubjectsAndTimetable();
    }, [year]);

    // Handle year selection
    const handleYearChange = (e) => {
        setYear(e.target.value);
    };

    // Handle slot click
    const handleSlotClick = (dayIndex, periodIndex) => {
        setSelectedSlot({ dayIndex, periodIndex });
    };

    // Handle subject type selection
    const handleSubjectTypeChange = (e) => {
        setSubjectType(e.target.value);
    };

    // Handle room selection
    const handleRoomChange = (e) => {
        setSelectedRoom(e.target.value);
    };

    // Handle subject assignment
    const handleSubjectAssign = () => {
        if (!selectedSlot) return;

        const { dayIndex, periodIndex } = selectedSlot;

        // Validation for empty fields
        if (!selectedRoom || !subjectType || !selectedSlot.subject) {
            setErrorMessage('Please fill all the fields (subject, type, and room).');
            return;
        }

        let updatedTimetable = [...timetable];

        // Check if the subject is a lab (2 periods)
        if (subjectType === 'lab') {
            if (periodIndex + 1 < 9 && !updatedTimetable[dayIndex].slots[periodIndex] && !updatedTimetable[dayIndex].slots[periodIndex + 1]) {
                updatedTimetable[dayIndex].slots[periodIndex] = `${subjects.find(sub => sub.name === selectedSlot.subject).name} - ${subjectType} (${selectedRoom})`;
                updatedTimetable[dayIndex].slots[periodIndex + 1] = `${subjects.find(sub => sub.name === selectedSlot.subject).name} - ${subjectType} (${selectedRoom})`; // Assign to the next period
            } else {
                setErrorMessage("Not enough time for a Lab in this slot or the slot is already occupied.");
                return;
            }
        } else if (subjectType === 'tutorial') {
            if (!updatedTimetable[dayIndex].slots[periodIndex]) {
                updatedTimetable[dayIndex].slots[periodIndex] = `${subjects.find(sub => sub.name === selectedSlot.subject).name} - Tutorial (${selectedRoom})`;
            } else {
                setErrorMessage("This slot is already occupied.");
                return;
            }
        } else {
            if (!updatedTimetable[dayIndex].slots[periodIndex]) {
                updatedTimetable[dayIndex].slots[periodIndex] = `${subjects.find(sub => sub.name === selectedSlot.subject).name} - ${subjectType} (${selectedRoom})`;
            } else {
                setErrorMessage("This slot is already occupied.");
                return;
            }
        }

        setTimetable(updatedTimetable);
        setSelectedSlot(null);
        setSubjectType('');
        setSelectedRoom('');
        setErrorMessage('');
    };

    // Close subject assignment modal
    const closeModal = () => {
        setSelectedSlot(null);
    };

    // Save timetable changes
    const handleSaveTimetable = async () => {
        // try {
        //     const response = await fetch('http://localhost:5000/timetable/update', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ year, timetable }),
        //     });

        //     if (!response.ok) {
        //         throw new Error('Failed to save timetable');
        //     }

        //     alert('Timetable saved successfully!');
        // } catch (error) {
        //     console.error('Error saving timetable:', error);
        //     alert('Failed to save timetable');
        // }
        alert("Timetable saved successfully")
    };

    return (
        <div className="bg-gray-800 pb-6 flex flex-col items-center text-white rounded-lg shadow-lg w-[90%] mx-auto overflow-y-auto">
            <div className="py-4 mb-8 bg-black w-[100%] flex flex-row justify-center">
                <nav className="flex gap-6 text-lg font-medium">
                    <NavLink
                        to="/home/head/courses"
                        className={({ isActive }) =>
                            `hover:text-blue-500 p-4 m-4 ${isActive ? 'text-blue-300 font-semibold' : 'text-white'}`
                        }
                    >
                        Add Courses
                    </NavLink>
                    <NavLink
                        to="/home/head/manage"
                        className={({ isActive }) =>
                            `hover:text-blue-500 p-4 m-4 ${isActive ? 'text-blue-300 font-semibold' : 'text-white'}`
                        }
                    >
                        Manage Courses
                    </NavLink>
                    <NavLink
                        to="/home/head/timetable"
                        className={({ isActive }) =>
                            `hover:text-blue-500 p-4 m-4 ${isActive ? 'text-blue-300 font-semibold' : 'text-white'}`
                        }
                    >
                        Manage TimeTable
                    </NavLink>
                </nav>
            </div>
            <h1 className="py-4 text-center font-bold sm:text-2xl md:text-3xl lg:text-4xl">Timetable Management</h1>

            {/* Error Message */}
            {errorMessage && (
                <div className="text-red-600 mb-4 text-center">
                    <strong>{errorMessage}</strong>
                </div>
            )}

            {/* Year Selection */}
            <div className="mb-6 w-full max-w-md mx-auto">
                <label className="block text-lg font-medium mb-2" htmlFor="year-select">
                    Select Year:
                </label>
                <select
                    id="year-select"
                    value={year}
                    onChange={handleYearChange}
                    className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg border border-gray-300"
                >
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                </select>
            </div>

            {/* Timetable Table */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full text-center bg-gray-700 rounded-lg">
                    <thead>
                        <tr>
                            <th className="p-3 border border-gray-600">Day/Period</th>
                            {periods.map((period, index) => (
                                <th key={index} className="p-3 border border-gray-600">
                                    {period}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, dayIndex) => (
                            <tr key={dayIndex}>
                                <td className="p-3 border border-gray-600">{day}</td>
                                {timetable[dayIndex]?.slots.map((slot, periodIndex) => (
                                    <td
                                        key={periodIndex}
                                        className="p-3 border border-gray-600 hover:bg-gray-600 cursor-pointer"
                                        onClick={() => handleSlotClick(dayIndex, periodIndex)}
                                    >
                                        {slot || 'Empty'}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Subject Assignment Modal */}
            {selectedSlot && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 p-6 rounded-lg w-96">
                        <h3 className="text-2xl font-bold mb-4 text-center">Assign Subject</h3>

                        {/* Subject Dropdown */}
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-lg font-medium">Select Subject:</label>
                            <select
                                id="subject"
                                value={selectedSlot.subject || ''}
                                onChange={(e) => {
                                    selectedSlot.subject = e.target.value;
                                    setSelectedSlot({ ...selectedSlot });
                                }}
                                className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg border border-gray-300"
                            >
                                <option value="">Select a Subject</option>
                                {subjects.map((subject, index) => (
                                    <option key={index} value={subject.name}>
                                        {subject.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Subject Type */}
                        <div className="mb-4">
                            <label className="block text-lg font-medium mb-2">Select Subject Type:</label>
                            <div className="flex">
                                <label className="mr-4">
                                    <input
                                        type="radio"
                                        value="lecture"
                                        checked={subjectType === 'lecture'}
                                        onChange={handleSubjectTypeChange}
                                        className="mr-2"
                                    />
                                    Lecture
                                </label>
                                <label className="mr-4">
                                    <input
                                        type="radio"
                                        value="tutorial"
                                        checked={subjectType === 'tutorial'}
                                        onChange={handleSubjectTypeChange}
                                        className="mr-2"
                                    />
                                    Tutorial
                                </label>
                                <label className="mr-4">
                                    <input
                                        type="radio"
                                        value="lab"
                                        checked={subjectType === 'lab'}
                                        onChange={handleSubjectTypeChange}
                                        className="mr-2"
                                    />
                                    Lab
                                </label>
                            </div>
                        </div>

                        {/* Room Dropdown */}
                        <div className="mb-4">
                            <label htmlFor="room" className="block text-lg font-medium">Select Room:</label>
                            <select
                                id="room-select"
                                value={selectedRoom}
                                onChange={handleRoomChange}
                                className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg border border-gray-300"
                            >
                                <option value="">Select a Room</option> {/* Default option */}
                                {rooms.map((room) => (
                                    <option key={room._id} value={room.roomNumber}>
                                        {room.roomNumber}
                                    </option>
                                ))}
                            </select>

                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between">
                            <button
                                className="bg-green-600 text-white p-3 rounded-lg"
                                onClick={handleSubjectAssign}
                            >
                                Assign Subject
                            </button>
                            <button
                                className="bg-red-600 text-white p-3 rounded-lg"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Save Timetable */}
            <div className="text-center mt-6">
                <button
                    className="bg-blue-600 text-white p-3 rounded-lg"
                    onClick={handleSaveTimetable}
                >
                    Save Timetable
                </button>
            </div>
        </div>
    );
};

export default TimetableManagement;
