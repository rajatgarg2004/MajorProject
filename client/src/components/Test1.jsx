import React from 'react';

const Test1 = () => {
  const timetable = [
    [{
      day: 'Monday',
      periods: [
        { time: '9:00 - 10:00', subject: 'Smart Grid', teacher: 'LK', room: 'L8' },
        { time: '11:00 - 12:00', subject: 'MP LAB', teacher: 'L8', room: 'MPLAB' },
        { time: '12:00 - 1:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
        { time: '2:00 - 3:00', subject: 'CN Class', teacher: 'A', room: 'EL2009' },
      ],
    },
    {
      day: 'Tuesday',
      periods: [
        { time: '8:00 - 9:00', subject: 'EL2011', teacher: 'JG', room: 'EL2017' },
        { time: '9:00 - 10:00', subject: 'Physics', teacher: 'L4', room: 'EL2024' },
      ],
    },
    {
        day: 'Wednesday',
        periods: [
          { time: '8:00 - 9:00', subject: 'DS', teacher: 'L4', room: 'DEC III S2' },
          { time: '9:00 - 10:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
          { time: '11:00 - 12:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
        ],
      },
      {
        day: 'Thursday',
        periods: [
          { time: '8:00 - 9:00', subject: 'EL2011', teacher: 'T11', room: 'EL2017' },
          { time: '9:00 - 10:00', subject: 'Physics', teacher: 'L4', room: 'EL2024' },
          { time: '11:00 - 12:00', subject: 'CN LAB', teacher: 'L8', room: 'EL2009' },
        { time: '12:00 - 1:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
        ],
      },
      {
        day: 'Friday',
        periods: [
          { time: '8:00 - 9:00', subject: 'DS', teacher: 'L4', room: 'DEC III S2' },
          { time: '9:00 - 10:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
          { time: '11:00 - 12:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
        ],
      }],[
        {
          day: 'Monday',
          periods: [
            { time: '9:00 - 10:00', subject: 'Smart Grid', teacher: 'LK', room: 'DEC III S2' },
            { time: '11:00 - 12:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
            { time: '12:00 - 1:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
            { time: '2:00 - 3:00', subject: 'CN Class', teacher: 'A', room: 'EL2009' },
          ],
        },
        {
          day: 'Tuesday',
          periods: [
            { time: '8:00 - 9:00', subject: 'EL2011', teacher: 'JG', room: 'EL2017' },
            { time: '9:00 - 10:00', subject: 'Physics', teacher: 'L4', room: 'EL2024' },
          ],
        },
        {
            day: 'Wednesday',
            periods: [
              { time: '8:00 - 9:00', subject: 'DS', teacher: 'L4', room: 'DEC III S2' },
              { time: '9:00 - 10:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
              { time: '11:00 - 12:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
            ],
          },
          {
            day: 'Thursday',
            periods: [
              { time: '8:00 - 9:00', subject: 'EL2011', teacher: 'T11', room: 'EL2017' },
              { time: '9:00 - 10:00', subject: 'Physics', teacher: 'L4', room: 'EL2024' },
              { time: '11:00 - 12:00', subject: 'CN LAB', teacher: 'L8', room: 'EL2009' },
            { time: '12:00 - 1:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
            ],
          },
          {
            day: 'Friday',
            periods: [
              { time: '8:00 - 9:00', subject: 'DS', teacher: 'L4', room: 'DEC III S2' },
              { time: '9:00 - 10:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
              { time: '11:00 - 12:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
            ],
          }
      ], [
        {
          day: 'Monday',
          periods: [
            { time: '9:00 - 10:00', subject: 'Smart Grid', teacher: 'LK', room: 'DEC III S2' },
            { time: '11:00 - 12:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
            { time: '12:00 - 1:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
            { time: '2:00 - 3:00', subject: 'CN Class', teacher: 'A', room: 'EL2009' },
          ],
        },
        {
          day: 'Tuesday',
          periods: [
            { time: '8:00 - 9:00', subject: 'EL2011', teacher: 'JG', room: 'EL2017' },
            { time: '9:00 - 10:00', subject: 'Physics', teacher: 'L4', room: 'EL2024' },
          ],
        },
        {
            day: 'Wednesday',
            periods: [
              { time: '8:00 - 9:00', subject: 'DS', teacher: 'L4', room: 'DEC III S2' },
              { time: '9:00 - 10:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
              { time: '11:00 - 12:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
            ],
          },
          {
            day: 'Thursday',
            periods: [
              { time: '8:00 - 9:00', subject: 'EL2011', teacher: 'T11', room: 'EL2017' },
              { time: '9:00 - 10:00', subject: 'Physics', teacher: 'L4', room: 'EL2024' },
              { time: '11:00 - 12:00', subject: 'CN LAB', teacher: 'L8', room: 'EL2009' },
            { time: '12:00 - 1:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
            ],
          },
          {
            day: 'Friday',
            periods: [
              { time: '8:00 - 9:00', subject: 'DS', teacher: 'L4', room: 'DEC III S2' },
              { time: '9:00 - 10:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
              { time: '11:00 - 12:00', subject: 'MP LAB', teacher: 'L8', room: 'EL2009' },
            ],
          }
      ], [
        {
          day: 'Monday',
          periods: [
            { time: '9:00 - 10:00', subject: 'EL2024', teacher: 'DS', room: 'L4' },
            { time: '10:00 - 11:00', subject: 'EL2009', teacher: 'RIK', room: 'L8' },
            { time: '11:00 - 12:00', subject: 'EL2027', teacher: 'AKP', room: 'T11' },
          ],
        },
        {
          day: 'Tuesday',
          periods: [
            { time: '10:00 - 11:00', subject: 'EL2017', teacher: 'LK', room: 'T12' },
            { time: '11:00 - 12:00', subject: 'EL6011', teacher: 'TT', room: 'T12' },
            { time: '12:00 - 1:00', subject: 'EL6012', teacher: 'DH', room: 'SEL' },
            { time: '1:00 - 2:00', subject: 'EL6012', teacher: 'DH', room: 'SEL' },
            { time: '2:00 - 3:00', subject: 'EL2027', teacher: 'AKP', room: 'T11' },
            { time: '3:00 - 4:00', subject: 'HSM III', teacher: '', room: 'L8' },
          ],
        },
        {
            day: 'Wednesday',
            periods: [
              { time: '9:00 - 10:00', subject: 'EL2024', teacher: 'DS', room: 'L9' },
              { time: '10:00 - 11:00', subject: 'EL2033', teacher: 'BS', room: 'T11' },
              { time: '12:00 - 1:00', subject: 'EL2017', teacher: 'LK', room: 'T12' },
              { time: '2:00 - 3:00', subject: 'EL2027', teacher: 'AKP', room: 'T10' },
              { time: '3:00 - 4:00', subject: 'EL2027', teacher: 'AKP', room: 'SEL' },
              { time: '4:00 - 5:00', subject: 'EL2027', teacher: 'AKP', room: 'SEL' },
            ],
          },
          {
            day: 'Thursday',
            periods: [
              { time: '10:00 - 11:00', subject: 'HSM III', teacher: '', room: 'L8' },
              { time: '12:00 - 1:00', subject: 'EL2017', teacher: 'LK', room: 'T11' },
              { time: '3:00 - 4:00', subject: 'EL2009', teacher: 'RIK', room: 'L9' },
            ],
          },
          {
            day: 'Friday',
            periods: [
              { time: '9:00 - 10:00', subject: 'EL2009', teacher: 'RIK', room: 'T12' },
              { time: '10:00 - 11:00', subject: 'CS6701', teacher: 'AK', room: 'L27' },
              { time: '11:00 - 12:00', subject: 'CS6701 Lab', teacher: 'Ak', room: '303' },
              { time: '12:00 - 1:00', subject: 'CS6701 Lab', teacher: 'Ak', room: '303' },
              { time: '1:00 - 2:00', subject: 'EL2017', teacher: 'LK', room: 'L9' },
            ],
          }
      ]
  ];

  const periods = [
    '8:00 - 9:00', '9:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
    '12:00 - 1:00', '1:00 - 2:00', '2:00 - 3:00', '3:00 - 4:00', '4:00 - 5:00'
  ];
  const teachers = [
    { code: 'AG', name: 'PhD. Ayushi'},
    { code: 'AKP', name: 'Dr. Ajay Kumar'},
    { code: 'BS', name: 'Dr. Balwinder Singh'},
    { code: 'DA', name: 'Dr. Anu Singla'},
    { code: 'DH', name: 'Dr. Hanuman'},
    { code: 'DS', name: 'Dr. Shimi S.L.'},
    { code: 'JG', name: 'Dr. Jaimala Gambhir'},
    { code: 'LK', name: 'Dr. Loveleen Kaur'},
    { code: 'MET', name: 'ME-I Tarun'},
    { code: 'PC', name: 'Prof. Chailsy'},
    { code: 'PR', name: 'Prof. Preeti'},
    { code: 'PRV', name: 'Prof. Rajiv'},
    { code: 'RIK', name: 'Dr. Rintu Khanna'},
    { code: 'TT', name: 'Dr. Tilak Thakur'},
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
    'CS6701 Computer Networks'
  ];

  const classrooms = [
    'BIO LAB', 'CONTROL LAB', 'EA LAB', 'L26 - NAB', 'L27 - NAB', 'L28 - NAB', 'L30 - NAB', 'L31 - NAB', 'L4', 'L8 - EE department', 'L9 - EE department',
    'MACHINES LAB', 'MP LAB', 'Machine-II Lab', 'PE LAB', 'SEL', 'T10', 'T11', 'T12'
  ];
  return (
    <div className="overflow-x-auto bg-black p-10">
      <h1 className='text-white text-center text-3xl p-3'>Welcome to Time Table Management System</h1>
      <table className="table-auto w-full text-sm text-left border-collapse bg-black text-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-800 text-white border-b">
            <th className="border px-4 py-2">Day</th>
            {periods.map((period, idx) => (
              <th key={idx} className="border px-4 py-2 w-[2000px]">{period}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timetable[3].map((day, index) => (
            <tr key={index} className="border-b hover:bg-gray-700">
              <td className="border px-4 py-2 bg-gray-900 font-bold">{day.day}</td>
              {periods.map((period, idx) => {
                const currentPeriod = day.periods.find(p => p.time === period);
                return (
                  <td key={idx} className={`border px-4 py-2 ${currentPeriod ? 'bg-gray-800' : 'bg-gray-900'}`}>
                    {currentPeriod ? (
                      <div>
                        <div className="font-semibold">{currentPeriod.subject}</div>
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

export default Test1;