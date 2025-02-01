//Arithametic Operator
console.log("1.Arithametic operator");
let a = 10;
let b = 20;
console.log("add:", a + b);
console.log("sub:", a - b);
console.log("mult:", a * b);
console.log("div:", a / b);
console.log("module:", a % b);

// assignment operator
console.log("2.Assignment operators");
c = 10; //= assignment operator
console.log("c=", c);
console.log("+=:", (c += 10));
console.log("-=:", (c -= 10));
console.log("*=:", (c *= 10));
console.log("/=:", (c /= 10));
console.log("%=:", (c %= 10));

// Comparsion operator
console.log("3.Comparison operator");
console.log("==", a == b);
console.log("==", "hello" === "hello"); //check both data types and value it is called strickly equal to(===)
console.log(">", a > b);
console.log("<", a < b);
console.log("<=", a <= b);
console.log(">=", a >= b);

//Logical operator
console.log("4.Logical operator");
let b1 = true;
let b2 = false;
console.log("&&:", b1 && b2);
console.log("&&:", b1 && b1);
console.log("&&:", b2 && b2);
console.log("&&:", b1 || b2);
console.log("!:", !b1);

//Bitwise operator
console.log("5.Bitwise operator");
console.log("&", 5 & 10);
console.log("|", 5 | 10);
console.log("^", 5 ^ 10);
console.log("~", ~5);

//shift operator
console.log("6.Shift operator");
console.log("<<", 2 << 1);
console.log(">>", 2 >> 1);

//Ternary operator
console.log("7.Ternary operator");
const marks = 39;
marks > 40 ? console.log("eligable") : console.log("not eligable");

//comma operator
console.log("8.Comma operator");
console.log(",:", (n = 1), (m = 17), n + m);

//unary operator
console.log("9.Unary operator");
a = 10;
console.log("a++", a++);
a = 10;
console.log("++a", ++a);
a--;
console.log("--a", --a);

//Relational operators
console.log("10.Relational operator");
const emp = {
  id: 18,
  name: "sahil",
  sal: "free",
};
console.log("in:", "sal" in emp);
class fruits {
  fruits(name) {
    this.name = name;
    console.log(this.name);
  }
}
let mango = new fruits("mango"); //object
console.log("instanceof:", mango instanceof fruits);

// String operator
console.log("11.String operator");
let name = "fname " + "Mname " + "Lname ";
name += "String";
console.log("name=", name);

//chaining operator

let product1 = {
  product_category: "mobile phone",
  product_name: "samsung s25 ultra",
  product_id: 101,
  product_weight: "150gms",
  product_price: { original_price: 140000, discounted_price: 130000 },
};

let product2 = {
  product_category: "mobile phone",
  product_name: "iphone 16 pro",
  product_id: 102,
  product_weight: "160gms",
  product_price: "1,19,000",
  product_price: { original_price: 120000, discounted_price: 119000 },
};

console.log("?.", product1?.product_price?.original_priceṇ);
console.log("?.", product2?.product_price?.discounted_price);
