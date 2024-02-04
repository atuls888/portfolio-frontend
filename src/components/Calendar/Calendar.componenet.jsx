import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Time from "./Time";
import axios from "axios";

function CalendarComponent({
  finalArr,
  daysArr,
  monthArr,
  monthIndex,
  changeMonth,
}) {
  const today = new Date();
  const todayDate = today.getDate();
  const currentMonth = today.getMonth();

  const timeObj = {
    9: { type: "A.M.", time: 9 },
    10: { type: "A.M.", time: 10 },
    11: { type: "A.M.", time: 11 },
    12: { type: "P.M.", time: 12 },
    13: { type: "P.M.", time: 1 },
    14: { type: "P.M.", time: 2 },
    15: { type: "P.M.", time: 3 },
    16: { type: "P.M.", time: 4 },
    17: { type: "P.M.", time: 5 },
    18: { type: "P.M.", time: 6 },
    19: { type: "P.M.", time: 7 },
  };
  const minObj = {
    0: "00",
    1: "30",
  };

  const { days, month } = finalArr[monthIndex];
  const [activeButtonBackward, setActiveButtonBackward] = useState(false);
  const [activeButtonForward, setActiveButtonForward] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [meetDate, setMeetDate] = useState({
    date: todayDate,
    month: monthArr[finalArr[0]["month"]],
    monthIn: finalArr[0]["month"],
  });
  const [time, setTime] = useState(9);
  const [min, setMin] = useState(0);
  const [hourInc, setHourInc] = useState(true);
  const [hourDec, setHourDec] = useState(true);

  // console.log(meetDate);
  // console.log(month, currentMonth);

  function handleChange(e) {
    let value = e.target.value;
    setEmail(value);
    if (value.includes("@")) setSubmit(true);
    else setSubmit(false);
  }

  useEffect(() => {
    if (monthIndex === 0) setActiveButtonBackward(true);
    else setActiveButtonBackward(false);

    if (finalArr.length - 1 === monthIndex) setActiveButtonForward(true);
    else setActiveButtonForward(false);

    if (time === 19) setHourInc(true);
    else setHourInc(false);

    if (time === 9) setHourDec(true);
    else setHourDec(false);
  }, [
    activeButtonBackward,
    monthIndex,
    changeMonth,
    activeButtonForward,
    finalArr,
    hourInc,
    time,
    hourDec,
  ]);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      Email: email.toString().toLowerCase().trim(),
      Date: meetDate.date,
      Month: meetDate.monthIn,
      Hour: time,
      Min: min,
    };

    await axios
      // .post("/api/v1/contact", formData)
      .post("https://portfolio-mim4.onrender.com/contact", formData)
      .then((response) => {
        console.log(response.data, "Here!!");
        // Handle data
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(formData);
  }

  function handleInputDateClick(e) {
    const { name, value } = e.target;
    setMeetDate(() => {
      return {
        date: value,
        month: monthArr[name],
        monthIn: month,
      };
    });
  }

  function handleDateClick(buttonType, value) {
    if (buttonType == "hour") {
      if (value == "increment") setTime(time + 1);
      else setTime(time - 1);
    }
  }

  function handleMinClick(value) {
    if (value == "up") {
      setMin(1);
    } else setMin(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mt-5 items-center">
        <div className="flex justify-around w-60  items-center">
          <button
            disabled={activeButtonBackward}
            style={{ cursor: activeButtonBackward ? "no-drop" : "" }}
            onClick={(e) => {
              changeMonth("backward");
              e.preventDefault();
            }}
          >
            <ArrowBackIosIcon />
          </button>
          <div>{monthArr[month]}</div>
          <button
            disabled={activeButtonForward}
            style={{ cursor: activeButtonForward ? "no-drop" : "" }}
            onClick={(e) => {
              changeMonth("forward");
              e.preventDefault();
            }}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
        <div className="flex mt-6 gap-5 h-44 ">
          {daysArr.map((value, index) => {
            return (
              <div className="flex flex-col items-center" key={nanoid()}>
                <div>{value}</div>

                {days[index].map((value) => {
                  let inputStatus = false;
                  if (value < todayDate && month == currentMonth)
                    inputStatus = true;
                  // console.log(value);
                  {
                    if (value == "NA") {
                      return (
                        <button disabled key={nanoid()}>
                          <pre> </pre>
                        </button>
                      );
                    } else if (index === 0) {
                      return (
                        <button
                          disabled
                          key={nanoid()}
                          style={{ cursor: "no-drop", color: "grey" }}
                        >
                          {value}
                        </button>
                      );
                    } else {
                      return (
                        <input
                          type="button"
                          onClick={handleInputDateClick}
                          className={`  cursor-pointer inputDates`}
                          value={value}
                          key={nanoid()}
                          name={month}
                          disabled={inputStatus}
                          style={{
                            cursor: inputStatus ? "no-drop" : "",
                            color: inputStatus ? "grey" : "",
                          }}
                        />
                      );
                    }
                  }
                })}
              </div>
            );
          })}
        </div>
        <Time
          meetDate={meetDate}
          monthArr={monthArr}
          handleDateClick={handleDateClick}
          handleMinClick={handleMinClick}
          time={time}
          min={min}
          hourDec={hourDec}
          hourInc={hourInc}
          timeObj={timeObj}
          minObj={minObj}
        />
        <div className="flex gap-4 mt-4">
          <input
            value={email}
            type="email"
            placeholder="Email"
            required
            className="w-52 h-12 p-4 rounded-sm text-black"
            onChange={handleChange}
          />
          {submit && (
            <button type="submit" className="text-2xl">
              {" "}
              Submit
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

CalendarComponent.propTypes = {
  finalArr: PropTypes.array.isRequired,
  daysArr: PropTypes.array.isRequired,
  monthArr: PropTypes.array.isRequired,
  monthIndex: PropTypes.number.isRequired,
  changeMonth: PropTypes.func.isRequired,
};

export default CalendarComponent;
