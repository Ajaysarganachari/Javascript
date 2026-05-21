A String in JavaScript is a data type used to store text or characters.
//upper case
let str="sanket";
console.log("str=",str.toUpperCase());
//lower case
let name="PRAJWAL";
console.log("name=",name.toLowerCase());
//trim()
let str1="      ajay     ";
console.log("str1=",str1.trim());
//slice
let str2="stark";
console.log("str2=",str2.slice(3));
//string concatination
let str3="first";
let str4="vijay";
let res=str3+str4;
console.log(res);
//replace
let str5="Hello";
console.log(str5.replace("H","t"));




example=
  let fullName=prompt("enter your full name without space");
let username="@" + fullName + fullName.length;
console.log(username);
