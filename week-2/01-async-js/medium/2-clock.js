// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function getDateFormat() {
  let date = new Date();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  let timeOfDay = "";
  let hoursFormat = "";
  if (hours > 12) {
    hoursFormat = hours - 12;
    timeOfDay = "PM";
  } else {
    hoursFormat = hours;
    timeOfDay = "AM";
  }
  let dateStringT4Format = hours + ":" + minute + ":" + seconds;
  let dateStringFormat =
    hoursFormat + ":" + minute + ":" + seconds + " " + timeOfDay;
  console.log(dateStringT4Format);
  console.log(dateStringFormat);
}

setInterval(getDateFormat, 1000);
