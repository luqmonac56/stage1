let currentDayOfTheWeek = document.getElementById("currentDay");
let utcHour = document.getElementById("utcHour");
let utcMinute = document.getElementById("utcMinute");
let utcSec = document.getElementById("utcSec");
const currentDate = new Date();

const currentDay = currentDate.toLocaleString("en-US", { weekday: "long" });

currentDayOfTheWeek.textContent = currentDay;

const updateTime = () => {
  const now = new Date();
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();
  const seconds = now.getUTCSeconds();

  if (hours < 10) {
    utcHour.textContent = `0${hours}`;
  } else {
    utcHour.textContent = hours;
  }
  if (minutes < 10) {
    utcMinute.textContent = `0${minutes}`;
  } else {
    utcMinute.textContent = minutes;
  }
  if (seconds < 10) {
    utcSec.textContent = `0${seconds}`;
  } else {
    utcSec.textContent = seconds;
  }
};

setInterval(updateTime, 1000);
