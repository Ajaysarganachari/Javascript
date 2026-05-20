A loop in JavaScript is a programming structure that is used to repeat a block of code multiple times until a condition becomes false.
ypes of Loops in JavaScript
1. for Loop

Used when we know how many times the loop should run.

Syntax
for(initialization; condition; increment/decrement){
    // code
}
Example
for(let i = 1; i <= 5; i++){
    console.log(i);
}
Output
1
2
3
4
5
Definition

The for loop repeats a block of code for a fixed number of times.
    example=
    for(i=1;i<+100;i++){
    console.log("for loop printed 100 times");
}

2. while Loop

Used when the number of iterations is not fixed.

Syntax
while(condition){
    // code
}
Example
let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}
Output
1
2
3
4
5
Definition

The while loop executes code as long as the condition is true.

3. do...while Loop

Runs the code at least one time even if the condition is false.

Syntax
do{
    // code
}while(condition);
Example
let i = 1;

do{
    console.log(i);
    i++;
}while(i <= 5);
Output
1
2
3
4
5
Definition

The do...while loop executes the code first and then checks the condition

\
example=
    let i=5;
do{
    console.log("i=",i);
    i++;
}while(i<=20);
