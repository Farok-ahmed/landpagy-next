import React, { useEffect, useState } from "react";

export default function Timer({ endTime }) {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const end = new Date(endTime).getTime();
      const now = new Date().getTime();

      const difference = end - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days < 10 ? `0${days}` : days,
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      });
    };

    const timerInterval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [endTime]);

  return (
    <div className="comming-countdown" id="timer">
      <span className="box" id="days">
        {timeLeft.days}
        <span>Days</span>
      </span>
      <span className="box" id="hours">
        {timeLeft.hours}
        <span>Hours</span>
      </span>
      <span className="box" id="minutes">
        {timeLeft.minutes}
        <span>Minutes</span>
      </span>
      <span className="box" id="seconds">
        {timeLeft.seconds}
        <span>Seconds</span>
      </span>
    </div>
  );
}
