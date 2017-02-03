var days = 60;
var reward = .01;

for (var i = 1; i <= days; i++) {
  if (reward >= 1000000000) {
    days = i;
    break;
  }
  reward = reward * 2;
}

console.log(days);
