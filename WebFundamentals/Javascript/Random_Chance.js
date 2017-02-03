// function slot(quarters) {
//   while (quarters > 0) {
//     quarters --;
//     var win = Math.floor(Math.random() * 101);
//     if (win === 1) {
//       quarters += (Math.floor(Math.random() * 51) + 50);
//       console.log(quarters + ": gain");
//     }
//     else {
//       console.log(quarters + ": loss");
//     }
//   }
//   return quarters;
// }
//
// slot(30);



function slot(quarters, leave) {
  while (quarters > 0) {
    quarters --;
    var win = Math.floor(Math.random() * 101);
    if (win === 1) {
      quarters += (Math.floor(Math.random() * 51) + 50);
      if (quarters < leave) {
        console.log(quarters + ": gain");
      }
      else {
        console.log(quarters + ": gain");
        console.log("You reached your goal of at least " + leave + " quarters");
        break;
      }
    }
    else {
      console.log(quarters + ": loss");
    }
  }
  return quarters;
}

slot(30, 200);
