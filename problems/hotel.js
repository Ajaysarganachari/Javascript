const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Input data
rl.question(
  "Enter month (May, June, July, August, September, October): ",
  (month) => {
    rl.question("Enter number of stays: ", (stays) => {
      month = month.trim();
      stays = parseInt(stays);

      // Prices based on the month
      let studioPrice, apartmentPrice;
      if (month === "May" || month === "October") {
        studioPrice = 5000;
        apartmentPrice = 3500;
      } else if (month === "June" || month === "September") {
        studioPrice = 4500;
        apartmentPrice = 3000;
      } else {
        // July or August
        studioPrice = 4000;
        apartmentPrice = 2500;
      }

      // Apply discount if applicable
      if (stays > 14) {
        studioPrice *= 0.7;
        apartmentPrice *= 0.9;
      } else if (stays > 7 && (month === "May" || month === "October")) {
        studioPrice *= 0.95;
      }

      // Calculate total prices
      let studioTotal = studioPrice * stays;
      let apartmentTotal = apartmentPrice * stays;

      // Output the results
      console.log(`Apartment: ${apartmentTotal.toFixed(2)} INR.`);
      console.log(`Studio: ${studioTotal.toFixed(2)} INR.`);
      rl.close();
    });
  }
);
