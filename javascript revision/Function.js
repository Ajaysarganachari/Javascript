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
