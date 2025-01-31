//variables
var num = 10;
console.log("num=", num);
console.log("type of num=", typeof num);

num = 23; //reassignment
console.log("num=", num);
console.log("type of num=", typeof num);

var num = "helloworld"; //redeclaration
console.log("num=", num);
console.log("type of num=", typeof num); //to find datatype of var

let n1 = 20;
console.log("n1=", n1);
console.log("type of n1=", typeof n1);

n1 = 45; //reassignment
console.log("n1=", n1);
console.log("type of n1=", typeof n1);

// redeclaration is not allowed in (let).
// let n1 = "helloworld"; //redeclaration
// console.log("n1=", n1);
// console.log("type of n1=", typeof n1);

//Datatypes.

//number
let num1 = 10;
console.log("num1", num1);
console.log("type of num1=", typeof n1);

num1 = 25.00000000000057; //max 15 dec precision.
console.log("num1", num1);
console.log("type of num1=", typeof n1);

//String
let name1 = "john carter";
console.log("name=", name1);
console.log("type of name1=", typeof name1);

//boolean
let bool = true; //preferred method
console.log("bool=", bool);
console.log("type of bool=", typeof bool);

bool = false;
console.log("bool=", bool);
console.log("type of bool=", typeof bool);

let bool1 = 1;
console.log("bool1=", bool1);
console.log("type of bool1=", typeof bool1);

//null
let result = null; // default datatype of JS is Object
console.log("result=", result);
console.log("type of result=", typeof result);

result = 10 + 20;
console.log("result=", result);
console.log("type of result=", typeof result);

//undefined
let temp; //nothing is assigned to a variable not even null
console.log("temp=", temp);
console.log("type of temp=", typeof temp);

//non primitive datatypes:

//array
let basket = ["apples", "mangos", "cherry", "bananas", "grapes"];
console.log("basket=", basket);
console.log("basket first item=", basket[0]); //index values to access elements
console.log("type of basket", typeof basket);

//object - key and value pairs
let product1 = {
  product_category: "mobile phone",
  product_name: "samsung s25 ultra",
  product_id: 101,
  product_weight: "150gms",
  product_price: "1,30,000",
};

console.log("product1=", product1);
console.log("product1_name=", product1.product_name); //using dot operator
console.log("product1_name=", product1["product_name"]); //using key as index
console.log("type of product1", typeof product1);

let product2 = {
  product_category: "mobile phone",
  product_name: "iphone 16 pro",
  product_id: 102,
  product_weight: "160gms",
  product_price: "1,19,000",
};

console.log("product2=", product2);
console.log("product2_name=", product2.product_name); //using dot operator
console.log("product2_name=", product2["product_name"]); //using key as index
console.log("type of product2", typeof product2);

let product3 = {
  product_category: "mobile phone",
  product_name: "google pixel",
  product_id: 103,
  product_weight: "180gms",
  product_price: "60,000",
};

console.log("product3=", product3);
console.log("product3_name=", product3.product_name); //using dot operator
console.log("product3_name=", product3["product_name"]); //using key as index
console.log("type of product3", typeof product3);

let product4 = {
  product_category: "mobile phone",
  product_name: "vivo v40",
  product_id: 104,
  product_weight: "139gms",
  product_price: "40,000",
};

console.log("product4=", product4);
console.log("product4_name=", product4.product_name); //using dot operator
console.log("product4_name=", product4["product_name"]); //using key as index
console.log("type of product4", typeof product4);
