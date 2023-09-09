// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Display current day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const currentDayOfWeek = daysOfWeek[today.getUTCDay()];
  document.querySelector(
    "[data-testid='currentDayOfTheWeek']"
  ).textContent = `Current Day: ${currentDayOfWeek}`;

  // Display current UTC time in 24-hour format
  const currentUTCTime = today.toISOString().substr(11, 8); // Get HH:MM:SS from ISO string
  document.querySelector(
    "[data-testid='currentUTCTime']"
  ).textContent = `UTC Time (24-hr): ${currentUTCTime}`;
});
