var HOUR = 12;
var MINUTE = 11;
var PERIOD = "AM";
var timeOfDay;

console.log(HOUR + ":" + MINUTE + PERIOD);



if (PERIOD === "AM" && HOUR < 12){
  timeOfDay = " in the morning";
}
else if (PERIOD === "PM" && HOUR > 4 && HOUR < 12) {
  timeOfDay = " in the evening";
}
else if (PERIOD === "PM" && HOUR <= 4) {
  timeOfDay = " in the afternoon";
}
else if (PERIOD === "PM" && HOUR === 12) {
  timeOfDay = " in the afternoon";
}
else {
  timeOfDay = " in the morning";
}


if (HOUR === 12 && MINUTE == 0 && PERIOD === "PM") {
  console.log("It is Noon");
}

else {
  if (MINUTE < 30) {
    console.log("It's just after " + HOUR + timeOfDay);
  }




  if (MINUTE > 30) {
    if (HOUR === 12) {
      console.log("It's almost 1" + timeOfDay);
    }
    else {
      console.log("It's almost " + (HOUR + 1) + timeOfDay);
    }
  }
}
