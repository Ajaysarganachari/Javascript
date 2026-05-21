
An array is a collection of elements (values) stored in an ordered list, where each element is accessed by its index (position),

let students=[12,15,18,19,07];
students[0]=20;
console.log(students);
console.log(students.length);
console.log(students[0]);
Array indices are the position numbers of elements in an array.

Index always starts from 0
Each element has its own index number
Example:
let avenger=["tonny","blackvido","hulk","thor","ant man","captain america"];
console.log(avenger);
console.log(avenger.length);
looping over an array
using for loop
 let avengers=["tonny","blackvido","hulk","thor","ant man","captain america"];
 for(i=0;i<avengers.length;i++){
     console.log(avengers[i]);
 }
for of loop
for(let el of avengers){
    console.log(el);
}

example
let marks=[86,97,44,37,76,60];
let sum=0;
for(i=0;i<marks.length;i++){
    sum = sum + marks[i];
}
let average = sum / marks.length;

example
let items=[250,645,300,900,50];
for (i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]-=offer;
}
    console.log(items);


console.log(average);
 let items=[250,645,300,900,50];
let i=0;
for(let val of items){
    console.log(`value at index ${i}=${val}`);
    let offer=val/10;
    items[i]=items[i]-offer;
//     console.log(`value after offer =${items[i]}`);
//     i++;
//     }



 methods in array
  let students=[12,15,18,19,07];
 students[0]=20;
 console.log(students);
 console.log(students.length);
console.log(students[0]);
let avenger=["tonny","blackvido","hulk","thor","ant man","captain america"];
console.log(avenger);
console.log(avenger.length);
looping over an array
using for loop
 let avengers=["tonny","blackvido","hulk","thor","ant man","captain america"];
 for(i=0;i<avengers.length;i++){
     console.log(avengers[i]);
 }
for of loop
for(let el of avengers){
    console.log(el);
}

example
let marks=[86,97,44,37,76,60];
let sum=0;
for(i=0;i<marks.length;i++){
    sum = sum + marks[i];
}
let average = sum / marks.length;

example
let items=[250,645,300,900,50];
for (i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]-=offer;
}
    console.log(items);


console.log(average);
 let items=[250,645,300,900,50];
let i=0;
for(let val of items){
    console.log(`value at index ${i}=${val}`);
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer =${items[i]}`);
    i++;
    }





Array methods are built-in functions used to perform operations on arrays like adding, removing, searching, and modifying elements.
push method
let fruits=["mango","apple","banana"];
fruits.push("orange");
console.log(fruits);
pop method
let name=["ajay","vijay","prasad","shrvan"];
console.log(name);
name.pop();
console.log(name);
  to string method
  let fruits=["mango","apple","banana"];
  console.log(fruits);
  console.log(fruits.toString);
  console.log(fruits);
concat method
 let fruits=["mango","apple","banana"];
 let veg=["tamato","garlic","onion"];
 let every=fruits.concat(veg);
 console.log(every);
unshift method'
 let fruits=["mango","apple","banana"];
 fruits.unshift("orange");
 console.log(fruits);
shift method delete from start and return
 let fruits=["mango","apple","banana"];
 fruits.shift();
 console.log(fruits);
slice() returns a piece of the array
 let fruits=["mango","apple","banana"];
 console.log(fruits);
 console.log(fruits.slice(1,3));

splice ()change original array (add,remove,replace)
 let fruits=["mango","apple","banana","orange","kacha mango"];
 fruits.splice(3,1,"pappaya","grapes");
 console.log(fruits);


let companies=["Bloomberg","microsoft","uber","google","ibm","netflix"];
companies.shift();
console.log(companies);
companies.splice(1,1,"ola");
console.log(companies);
companies.push("Amazon");
console.log(companies
