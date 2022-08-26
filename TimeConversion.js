function timeConversion(s) {
  let modifier = s.substr(8, 2);
  let sliceTime = s.slice(0, 8);
  let [hours, minutes, seconds] = sliceTime.split(":");
  // Check if hours is 12
  if (hours == "12") {
    hours = "00";
  }
  // Check if modifier is PM
  if (modifier == "PM") {
    hours = parseInt(hours) + 12;
  }
  return `${hours}:${minutes}:${seconds}`;
}
