function functionName(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      console.log(true);
    }
  }
}

var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
// newArray is [1, -3, 0.5]

console.log(newArray);
