import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PropTypes from "prop-types";

function Time({
  meetDate,
  monthArr,
  handleDateClick,
  handleMinClick,
  time,
  min,
  hourDec,
  hourInc,
  timeObj,
  minObj,
}) {
  const { date, monthIn } = meetDate;

  
  return (
    <div className="flex justify-center items-center pt-1 pb-4 gap-6">
      <div>{`${date} ${String(monthArr[monthIn]).substring(0, 3)}`}</div>
      <div className="flex flex-col justify-around items-center">
        <button
          onClick={(e) => {
            handleDateClick("hour", "increment");
            e.preventDefault();
          }}
          style={{ cursor: hourInc ? "no-drop" : "" }}
          disabled={hourInc}
        >
          <ArrowDropUpIcon className="hover:bg-green-600" />
        </button>
        {timeObj[time].time}
        <button
          onClick={(e) => {
            handleDateClick("hour", "decrement");
            e.preventDefault();
          }}
          style={{ cursor: hourDec ? "no-drop" : "" }}
          disabled={hourDec}
        >
          <ArrowDropDownIcon className="hover:bg-green-600" />
        </button>
      </div>
      <div className="flex flex-col justify-around items-center">
        <button
          onClick={(e) => {
            handleMinClick("up");
            e.preventDefault();
          }}
        >
          <ArrowDropUpIcon className="hover:bg-green-600" />
        </button>
        {minObj[min]}
        <button
          onClick={(e) => {
            handleMinClick("down");
            e.preventDefault();
          }}
        >
          <ArrowDropDownIcon className="hover:bg-green-600" />
        </button>
      </div>
      <div>{timeObj[time].type}</div>
    </div>
  );
}

Time.propTypes = {
  meetDate: PropTypes.object.isRequired,
  monthArr: PropTypes.array.isRequired,
  handleDateClick: PropTypes.func.isRequired,
  handleMinClick: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  hourDec: PropTypes.bool.isRequired,
  hourInc: PropTypes.bool.isRequired,
  timeObj: PropTypes.object.isRequired,
  minObj: PropTypes.object.isRequired,
};

export default Time;
