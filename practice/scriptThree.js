"use strict";
/////////// Bugs and debugging

// const tempratures = [3, -2, -6, -1, "error", 9, 13, 17, 15, , 14, 9, 5];
// const tempratures2 = [1, 31, 2];

// const calcTemp = function (a1, a2) {
//   const temp = a1.concat(a2);
//   console.log(temp);
//   let max = temp[0];
//   let min = temp[0];

//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i] === "error") continue;

//     if (temp[i] > max) max = temp[i];
//     if (temp[i] < min) min = temp[i];
//   }
//   console.log(max);
//   console.log(min);
//   return max - min;
// };
// const result = calcTemp(tempratures, tempratures2);
// console.log(result);

///////////////////////////////////
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Enter a number")),
//   };
//   debugger; /// adds a break point in the code
//   return measurement.value + 273;
// };

// console.log(measureKelvin());
// console.warn(); // gives us a warning if there is a problem i our code
// console.error(); // tells us if there is an error in our code

// const data = [17, 21, 23];
// // const data2 = [12, 5, -5, 0, 4];

// const forecast = function (arr) {
//   let result = " ";
//   for (let i = 0; i < arr.length; i++) {
//     result += `${arr[i]}C in ${i + 1} days .... `;
//   }
//   console.log(`....` + result);
// };

// forecast(data);
