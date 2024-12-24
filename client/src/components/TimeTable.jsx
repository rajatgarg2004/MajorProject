import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const TimeTable = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedElectives, setSelectedElectives] = useState({
    departmentElective1: "",
    departmentElective2: "",
    openElective1: "",
    openElective2: "",
  });
  const [filteredSubjects, setFilteredSubjects] = useState([]);
  const subjectsTotal = {
    'EL2009': {
      teacher: 'RIK',
      periods: [
        { day: 'Tuesday', time: '10:00 - 11:00', room: 'L9', lab: false },
        { day: 'Thursday', time: '11:00 - 12:00', room: 'L9', lab: false },
        { day: 'Friday', time: '2:00 - 3:00', room: 'L9', lab: false },
      ],
      elective: {
        type: 'Department Elective',
        number: 1,
      },
      year: '4'
    },
    'EL2011': {
      teacher: 'JG',
      periods: [
        { day: 'Tuesday', time: '10:00 - 11:00', room: 'L8', lab: false },
        { day: 'Thursday', time: '11:00 - 12:00', room: 'L8', lab: false },
        { day: 'Friday', time: '2:00 - 3:00', room: 'L8', lab: false },
        { day: 'Wednesday', time: '2:00 - 3:00', room: 'PE Lab', lab: true },
        { day: 'Wednesday', time: '3:00 - 4:00', room: 'PE Lab', lab: true },
      ],
      elective: {
        type: 'Department Elective',
        number: 1,
      },
      year: '4'
    },
    'EL2017': {
      teacher: 'LK',
      periods: [
        { day: 'Tuesday', time: '10:00 - 11:00', room: 'T12', lab: false },
        { day: 'Thursday', time: '11:00 - 12:00', room: 'T12', lab: false },
        { day: 'Friday', time: '2:00 - 3:00', room: 'T12', lab: false },
      ],
      elective: {
        type: 'Department Elective',
        number: 1,
      },
      year: '4'
    },
    'EL2024': {
      teacher: 'DS',
      periods: [
        { day: 'Monday', time: '2:00 - 3:00', room: 'L8', lab: false },
        { day: 'Thursday', time: '9:00 - 10:00', room: 'L8', lab: false },
        { day: 'Friday', time: '11:00 - 12:00', room: 'L8', lab: false },
        { day: 'Wednesday', time: '2:00 - 3:00', room: 'MP Lab', lab: true },
        { day: 'Wednesday', time: '3:00 - 4:00', room: 'MP Lab', lab: true },
      ],
      elective: {
        type: 'Department Elective',
        number: 2,
      },
      year: '4'

    },
    'EL2027': {
      teacher: 'AKP',
      periods: [
        { day: 'Tuesday', time: '10:00 - 11:00', room: 'T11', lab: false },
        { day: 'Thursday', time: '11:00 - 12:00', room: 'T11', lab: false },
        { day: 'Friday', time: '2:00 - 3:00', room: 'T11', lab: false },
      ],
      elective: {
        type: 'Department Elective',
        number: 1,
      },
      year: '4'
    },
    'EL2033': {
      teacher: 'BS',
      periods: [
        { day: 'Monday', time: '2:00 - 3:00', room: 'L9', lab: false },
        { day: 'Thursday', time: '9:00 - 10:00', room: 'L9', lab: false },
        { day: 'Friday', time: '11:00 - 12:00', room: 'L9', lab: false },
      ],
      elective: {
        type: 'Department Elective',
        number: 2,
      },
      year: '4'
    },
    'CS6701': {
      teacher: 'AK',
      periods: [
        { day: 'Monday', time: '10:00 - 11:00', room: 'L26', lab: false },
        { day: 'Tuesday', time: '11:00 - 12:00', room: 'L26', lab: false },
        { day: 'Wednesday', time: '10:00 - 11:00', room: 'L27', lab: false },
        { day: 'Thursday', time: '2:00 - 3:00', room: '303', lab: true },
        { day: 'Thursday', time: '3:00 - 4:00', room: '303', lab: true },
      ],
      elective: {
        type: 'Open Elective',
        number: 1,
      },
      year: '4'
    },
    'AE6001': {
      teacher: 'TKJ',
      periods: [
        { day: 'Monday', time: '10:00 - 11:00', room: 'L26', lab: false },
        { day: 'Tuesday', time: '11:00 - 12:00', room: 'L26', lab: false },
        { day: 'Wednesday', time: '10:00 - 11:00', room: 'L27', lab: false },
        { day: 'Tuesday', time: '2:00 - 3:00', room: 'L26', lab: true },
        { day: 'Tuesday', time: '3:00 - 4:00', room: 'L26', lab: true },
      ],
      elective: {
        type: 'Open Elective',
        number: 1,
      },
      year: '4'
    },
    'MM6001': {
      teacher: 'GPS',
      periods: [
        { day: 'Tuesday', time: '1:00 - 2:00', room: 'L26', lab: false },
        { day: 'Wednesday', time: '11:00 - 12:00', room: 'L26', lab: false },
        { day: 'Thursday', time: '10:00 - 11:00', room: 'L27', lab: false },
      ],
      elective: {
        type: 'Open Elective',
        number: 2,
      },
      year: '4'
    },
    'PR6010': {
      teacher: 'SK',
      periods: [
        { day: 'Tuesday', time: '1:00 - 2:00', room: 'DH5', lab: false },
        { day: 'Wednesday', time: '11:00 - 12:00', room: 'DH5', lab: false },
        { day: 'Thursday', time: '10:00 - 11:00', room: 'DH5', lab: false },
      ],
      elective: {
        type: 'Open Elective',
        number: 2,
      },
      year: '4'
    }
  }
  const periods = [
    '8:00 - 9:00', '9:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
    '12:00 - 1:00', '1:00 - 2:00', '2:00 - 3:00', '3:00 - 4:00', '4:00 - 5:00'
  ];
  const teachers = [
    { code: 'AG', name: 'PhD. Ayushi' },
    { code: 'AKP', name: 'Dr. Ajay Kumar' },
    { code: 'BS', name: 'Dr. Balwinder Singh' },
    { code: 'DA', name: 'Dr. Anu Singla' },
    { code: 'DH', name: 'Dr. Hanuman' },
    { code: 'DS', name: 'Dr. Shimi S.L.' },
    { code: 'JG', name: 'Dr. Jaimala Gambhir' },
    { code: 'LK', name: 'Dr. Loveleen Kaur' },
    { code: 'MET', name: 'ME-I Tarun' },
    { code: 'PC', name: 'Prof. Chailsy' },
    { code: 'PR', name: 'Prof. Preeti' },
    { code: 'PRV', name: 'Prof. Rajiv' },
    { code: 'RIK', name: 'Dr. Rintu Khanna' },
    { code: 'TT', name: 'Dr. Tilak Thakur' },
    { code: 'TKJ', name: 'DR. Tejinder Kumar Jindal' },
    { code: 'GPS', name: 'Gaurav Pal Singh' },
    { code: 'AK', name: 'Atul Kumar' },
    { code: 'SK', name: 'Suman Kant' }
  ];

  const subjects = [
    'EL2009 Neural Network and Fuzzy System TUT',
    'EL2011 Medical Instrumentation',
    'EL2024 Electric Vehicles',
    'EL2027 Power Electronics in Renewable Energy System',
    'EL2033 HVDC and FACTS',
    'EL6010 Renewable Energy Technologies',
    'EL6011 Microprocessor and Microcontroller',
    'EL6012 Electric Vehicles',
    'EL6018 Energy Storage Systems',
    'HSM III',
    'CS6701 Computer Networks',
    'AE6001 Introduction To Aerospace Engineering',
    'MM6001 Surface Engineering',
    'PR6010  Product Design and Development'
  ];

  const classrooms = [
    'BIO LAB - Electrical Department', 'CONTROL LAB - Electrical Department', 'EA LAB - Electrical Department', 'L26 - NAB', 'L27 - NAB', 'L28 - NAB', 'L30 - NAB', 'L31 - NAB', 'L4 - Electrical Department', 'L8 - Electrical Department', 'L9 - Electrical Department',
    'MACHINES LAB - Electrical Department', 'MP LAB - Electrical Department', 'Machine Lab - Electrical Department', 'PE LAB - Electrical Department', 'T10 - Electrical Department', 'T11 - Electrical Department', 'T12 - Electrical Department', 'DH5 - Production Department', '303 - NAB'
  ];
  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);

    // Filter subjects based on year
    const filtered = Object.keys(subjectsTotal).filter(
      (subject) => subjectsTotal[subject].year === year
    );
    setFilteredSubjects(filtered);
  };

  const handleElectiveChange = (electiveType, subject) => {
    setSelectedElectives((prev) => ({ ...prev, [electiveType]: subject }));

    // Filter out periods for the same elective type
    const updatedTimetable = filteredSubjects.filter((entry) => {
      const electiveInfo = subjectsTotal[entry.subject]?.elective || {};
      return !(electiveInfo.type === (electiveType.includes("department") ? "Department Elective" : "Open Elective") &&
        electiveInfo.number === (electiveType.includes("1") ? 1 : 2));
    });

    // Add periods for the newly selected elective
    if (subject) {
      const electivePeriods = subjectsTotal[subject]?.periods || [];
      electivePeriods.forEach((period) => {
        if (!updatedTimetable.some((entry) => entry.day === period.day && entry.time === period.time)) {
          updatedTimetable.push({
            ...period,
            subject,
            teacher: subjectsTotal[subject]?.teacher || "Unknown",
          });
        }
      });
    }

    setFilteredSubjects(updatedTimetable);
  };



  const getTimetable = () => filteredSubjects;


  const timetable = getTimetable();
  console.log(timetable)
  return (
    <div className="overflow-x-auto bg-black p-10 w-[80%] m-5">
      {/* Year Selection */}
      <div className="my-4 flex flex-row justify-center">
        <label className="text-white text-lg">Select Year: </label>
        <select
          className="p-2 bg-gray-800 text-white rounded"
          onChange={handleYearChange}
        >
          <option value="">--Select Year--</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
      </div>

      {/* Elective Dropdowns */}
      {selectedYear && (
        <div className="grid grid-cols-2 gap-4 text-white">
          {["departmentElective1", "departmentElective2", "openElective1", "openElective2"].map(
            (electiveType, idx) => (
              <div key={idx}>
                <label className="block mb-2 capitalize">
                  {electiveType.replace(/([A-Z])/g, " $1")}:
                </label>
                <select
                  className="p-2 bg-gray-800 text-white rounded w-full"
                  onChange={(e) => handleElectiveChange(electiveType, e.target.value)}
                >
                  <option value="">--Select--</option>
                  {filteredSubjects
                    .filter(
                      (subject) =>
                        subjectsTotal[subject]?.elective?.type.includes(
                          electiveType.includes("department") ? "Department" : "Open"
                        ) &&
                        subjectsTotal[subject]?.elective?.number ===
                        (electiveType.includes("1") ? 1 : 2)
                    )
                    .map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                </select>
              </div>
            )
          )}
        </div>
      )}

      {/* Timetable Display */}
      {timetable.length > 0 && (
        <div className="mt-8">
          <table className="table-auto w-full text-sm text-left border-collapse bg-black text-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-800 text-white border-b">
                <th className="border px-4 py-2">Day</th>
                {periods.map((period, idx) => (
                  <th key={idx} className="border px-4 py-2">{period}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, dayIdx) => (
                <tr key={dayIdx} className="border-b hover:bg-gray-700">
                  <td className="border px-4 py-2 bg-gray-900 font-bold">{day}</td>
                  {periods.map((period, periodIdx) => {
                    // Find the matching period details from the timetable
                    const currentPeriod = filteredSubjects.find(
                      (entry) => entry.day === day && entry.time === period
                    );

                    // Render the details for the current period
                    return (
                      <td
                        key={periodIdx}
                        className={`border px-4 py-2 ${currentPeriod ? "bg-gray-800" : "bg-gray-900"}`}
                      >
                        {currentPeriod ? (
                          <div>
                            <div className="font-semibold">
                              {currentPeriod.lab ? "Lab: " : ""}
                              {currentPeriod.subject}
                            </div>
                            <div className="text-sm">{currentPeriod.teacher}</div>
                            <div className="text-xs">{currentPeriod.room}</div>
                          </div>

                        ) : (
                          <div className="text-gray-400">Free</div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      )}

      <div className='flex flex-row justify-between'>
        <div className='flex flex-col justify-between'>
          <h2 className="text-white text-2xl mt-8 mb-4">Teachers</h2>
          <table className="table-auto w-full text-sm text-left border-collapse bg-black text-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-800 text-white border-b">
                <th className="border px-4 py-2">Code</th>
                <th className="border px-4 py-2">Name</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr key={index} className="border-b hover:bg-gray-700">
                  <td className="border px-4 py-2">{teacher.code}</td>
                  <td className="border px-4 py-2">{teacher.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex flex-col'>
          <h2 className="text-white text-2xl mt-8 mb-4">Subjects</h2>
          <ul className="style-none list-inside">
            {subjects.map((subject, index) => (
              <li key={index} className="text-white">{subject}</li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col'>
          <h2 className="text-white text-2xl mt-8 mb-4">Classrooms</h2>
          <ul className="style-none list-inside">
            {classrooms.map((classroom, index) => (
              <li key={index} className="text-white">{classroom}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default TimeTable;
