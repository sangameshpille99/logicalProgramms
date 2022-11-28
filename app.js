// !alphabetical order
// let word = "vivek";
// // ? split method without inbuilt
// let spilitinngWord = [];
// let word1=""
// for (let i = 0; i < word.length; i++){
//     word1 += word[i]
//    spilitinngWord.push(word1)
//     // console.log(spilitinngWord)
//     word1 = "";
// }

// // ?sort
//   var tmp;
//   for (var i = 0; i < spilitinngWord.length; i++) {
//     for (var j = i + 1; j < spilitinngWord.length; j++) {
//       /* if ASCII code greater then swap the elements position*/
//       if (spilitinngWord[i] > spilitinngWord[j]) {
//         tmp = spilitinngWord[i];
//         spilitinngWord[i] = spilitinngWord[j];
//         spilitinngWord[j] = tmp;
//       }
//     }
// }
// console.log(spilitinngWord);

// // ? sort
// var join = (array) => {
//     if (!array.length) return "";
//     var result = array[0];
//     for (var i = 1; i < array.length; i++) {
//       result +=  array[i];
//     }
//     return result;
//   },
//   array = spilitinngWord;

// console.log(join(array));

//!    Area of circle

// function AreaOfCircle(radius) {
//     return (3.142/4)*4*radius*radius
// }
// console.log(AreaOfCircle(4));

// !AreaOfTriangle
// let height = Number(prompt("enter height"))
// let breadth = Number(prompt("enter breadth"));
// function AreaOfTriangle(height,breadth) {
//     return 0.5*height*breadth
// }
// console.log(AreaOfTriangle(height, breadth));

//! armstrong

// let sum = 0;
// const number = prompt("Enter a three-digit positive integer: ");
// //for n digit passing as number
// //let power=number.length;
// let temp = number;
// while (temp > 0) {
//   let remainder = temp % 10;
//   sum += remainder * remainder * remainder; //sum+=remainder**power
//   temp = parseInt(temp / 10);
// }
// if (sum == number) {
//   console.log(`${number} is an Armstrong number`);
// } else {
//   console.log(`${number} is not an Armstrong number.`);
// }

// !arrayEmpty
// var arrayList = ["a", "b", "c", "d", "e", "f"];
// var anotherArrayList = arrayList;
// arrayList = [];
// console.log(anotherArrayList);
// console.log(arrayList);

// ! object into array

// let arr = {
//     id: 1,
//     name: "sangamesh",
//     place: "bidar",

// }
// let arr1 = Object.assign([], arr);
// console.log(Array.isArray(arr1));

//!  Program to sort array in Ascending Order
// let Order = [25, 85, 31, 16, 78, 93, 48, 286, 4712, 632];
// let emp;
// for (let i = 1; i < Order.length; i++){
//     for (let j = 0; j <i; j++){
//         if (Order[i] < Order[j]) {
//             emp = Order[i];
//              Order[i] = Order[j];
//             Order[j] = emp;

//         }
//     }
// !ASCII values;
// how to get ascii values in javascript
// let a = "sangamesh";
// let b = a.charCodeAt(0);
// console.log(b);

// !Average.js
// how to get average of numbers in javascript
// var arrayNumber = [10, 25, 35, 65, 100];
// var total = 0;
// for (var i = 0; i < arrayNumber.length; i++){
//     total+=arrayNumber[i]
// }
// var avg = total / (arrayNumber.length)
// console.log(avg);

// !calculator using javascript
// how to write calculator program in javascript
// let number1 = Number(prompt(""));
// let number2 = Number(prompt(""));
// let symbol1=prompt("")
// let result;
// switch (symbol1) {
//     case "+": result = number1 + number2;
//         break;
//     case "-": result = number1 - number2;

//         break;
//     case "*": result = number1 * number2;

//         break;
//     case "/": result = number1 / number2;

//         break;
//     case "%": result = number1 % number2;

//         break;
//     default: result;

//         break;
// }
// console.log(result);

// !celsius to fahrenheit;
// function CelsiusToFah(celsius) {
//     return celsius * (9 / 5)+32

// }
// console.log(CelsiusToFah(30));

//! length of string;
// function LengthString(str) {
//     return str.length;
// }
// console.log(LengthString("sangamesh"));

// !combineArray;
// let a = [10, 20]
// let b = [30, 40]
// console.log(a.concat(b));
// console.log([...a, ...b]);

// !.empty array;
// let a = [];
// let b = [10, 20, 30, 40, 50]
// let c = b;
// b = a;
// console.log(b)
// console.log(c)

// !  even or odd
// let number = Number(prompt(""));
// if (number % 2 === 0) {
//     console.log("number is even");
// } else {
//     console.log("number is odd")
// }

//  !  even place

// let a = [10, 20, 25, 35, 40, 55, 60]
// let b=a.map((val,ind)=>{
//     if (ind % 2 === 0) {
//         return val*2;
//     } else {
//         return val
//     }
// })
// console.log(b);

// ! fibonacci series
// var n1 = 0;
// var n2 = 1;
// var result = 0;
// var number = 10;
// result = n1 + n2;

// while (result <= number) {
//   n1 = n2;
//   n2 = result;
//   result = n1 + n2;
// }
// console.log(result);

// ! age calculation

// function _calculateAge(birthday) { // birthday is a date
//     var ageDifMs = Date.now() - birthday.getTime();
//     var ageDate = new Date(ageDifMs); // miliseconds from epoch
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// console.log(_calculateAge(  new Date(1996 ,8 ,10)))

// ! vowels present or not

let name1 = "JavaScrIpt";

let vowels1 = ["a", "e", "i", "o", "u"];
let count = 0;
for (let letter of name1.toLowerCase()) {
  if (vowels1.includes(letter)) {
    count++;
  }
}
console.log(count);
