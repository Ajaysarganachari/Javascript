let inventry = [];
let removed = [];
function addproduct(name, quantity, price, category) {
  inventry.push({
    name: name,
    quantity: quantity,
    price: price,
    category: category,
  });
}
addproduct("apple", 50, 15.0, "fruit");
addproduct("mango", 80, 60.0, "fruit");
addproduct("orange", 40, 20.0, "fruit");

addproduct("patato", 50, 15.0, "vegetable");
addproduct("onion", 80, 60.0, "vegetable");
addproduct("tamato", 40, 20.0, "vegetable");

addproduct("milk", 50, 15.0, "dairy");
addproduct("curd", 80, 60.0, "dairy");

addproduct("bread", 50, 15.0, "bakery");
addproduct("cake", 80, 60.0, "bakery");

console.log(inventry);
