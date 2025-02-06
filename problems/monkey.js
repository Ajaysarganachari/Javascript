const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let monkey = 1;
let open_door = 0;
let close_doors = 100;
rl.question("enter monkey values:", (moneky) => {
  for (let d = 1; d <= 100; d++) {
    if (d % monkey == 0) {
      open_door++;
      console.log("opened=", d);
      close_doors--;
    }
  }
  console.log("open doors:", open_door);
  console.log("close doors:", close_doors);
});
