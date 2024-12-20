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