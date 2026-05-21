
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
