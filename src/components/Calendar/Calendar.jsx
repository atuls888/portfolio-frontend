import CalendarComponent from "./Calendar.componenet";
import { useState } from "react";


function Calendar() {
  const [month, setMonth] = useState(0);

  function changeMonth(value) {
    
    if (value === "forward") setMonth((prev) => prev + 1);
    else setMonth((prev) => prev - 1);
  }
  const today = new Date();

  const maxDaysObj = {};
  const maxMonths = 4;

  for (let i = 1; i <= maxMonths; i++) {
    let date = new Date(today.getFullYear(), today.getMonth() + i, 0);
    maxDaysObj[date.getMonth()] = date.getDate();
  }

  // console.log(maxDaysObj)

  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const monthObj = {};
  const finalArr = [];

  for (let key in maxDaysObj) {
    monthObj[key] = { month: key, days: {} };

    for (let j = 0; j < daysArr.length; j++) {
      monthObj[key]["days"][j] = [];
    }
  }

  for (let tempMonth in maxDaysObj) {
    const maxDays = maxDaysObj[tempMonth];

    let month = monthObj[tempMonth]["days"];

    for (let j = 1; j <= maxDays; j++) {
      const tempDate = new Date();
      tempDate.setDate(j);
      tempDate.setMonth(tempMonth);
      const day = tempDate.getDay();
      month[day].push(j);
    }
  }

  for (let key in monthObj) {
    let days = monthObj[key].days;

    for (let day in days) {
      const dayArr = days[day];
      let tempFirstDay = null;
      if (dayArr.includes(1)) tempFirstDay = day;

      if (tempFirstDay) {
        // console.log(tempFirstDay);

        for (let i = 0; i < daysArr.length; i++) {
          if (i < day) {
            days[i].unshift("NA");
          }
        }
      }
    }
  }

  for (let key in monthObj) {
    finalArr.push(monthObj[key]);
  }

  // console.log(finalArr);
  return (
    <div>
      <CalendarComponent
        finalArr={finalArr}
        monthArr={monthArr}
        daysArr={daysArr}
        monthIndex={month}
        changeMonth={changeMonth}
      />
    </div>
  );
}

export default Calendar;
