var hello = 5;

function printRange(start, end, skip) {
  for (var i = start; i < end; i += skip) {
    console.log(i);
  }
  var glue = 100;
  hello = glue + hello;
}

printRange(2, 10, 2);
