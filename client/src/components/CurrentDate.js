// import React, { useState, useEffect } from 'react';

// function DateDisplay() {
//   const [currentDate, setCurrentDate] = useState(new Date());

//   useEffect(() => {
//     const timerID = setInterval(() => tick(), 1000);

//     return () => {
//       clearInterval(timerID);
//     };
//   }, []);

//   const tick = () => {
//     setCurrentDate(new Date());
//   };

//   const options = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   };
//   const formattedDate = currentDate.toLocaleDateString(undefined, options);

//   return (
//     <div>
//       <p>{formattedDate}</p>
//     </div>
//   );
// }

// export default DateDisplay;

import React, { useState } from 'react';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getMonthData = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() - firstDay.getDay());
    const endDate = new Date(lastDay.getFullYear(), lastDay.getMonth(), lastDay.getDate() + (6 - lastDay.getDay()));
    const dates = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const monthData = getMonthData(currentDate.getFullYear(), currentDate.getMonth());

  return (
    <div>
      <div>
        <button onClick={prevMonth}>&lt;</button>
        <h2>{currentDate.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {monthData.map(date => (
            <tr key={date.getTime()}>
              <td>{date.getDate()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
