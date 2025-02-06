let e = 5;
let per = [50, 30, 40, 20, 10];
let budget = 150000;
for (let i = 0; i < e; i++) {
  let total = (per[i] / 100) * budget;
  console.log("total", total);
}
