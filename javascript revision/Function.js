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



filter() Method Definition

The filter() method in JavaScript is used to create a new array containing only the elements that satisfy a condition.


  let arr=[1,2,3,4,5,6,7,8,9,10];

let evenarr=arr.filter((val)=>{
    return val %2===0;
});
console.log(evenarr);


reduce() Method Definition

The reduce() method in JavaScript is used to reduce an array to a single value by applying a function on each element.


  let arr=[1,2,3,4];
const output=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log(output);





arrays addition and multiplication using reduce
let n=prompt("enter a number=");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
const output=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log("addition of array=",output);
const sum=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log("factorial=",sum);
