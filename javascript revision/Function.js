A function in JavaScript is a reusable block of code that performs a specific task when it is called


function greet() {
  console.log("Hello");
}

greet();.


The **forEach loop** in JavaScript is an array method used to execute a function once for each element in an array.




let arr=["pune","delhi","mumbai","banglore","manglore"];

arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
});


example= square of array
let arr=[1,2,3,4,5,6,7,8,9,10];
arr.forEach((arr)=>{
    console.log(arr*arr);
});


map() Method Definition

The map() method in JavaScript is an array method used to create a new array by applying a function to each element of the original array


let numbers = [1, 2, 3, 4];

let doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled);
