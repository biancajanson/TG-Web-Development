const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

let bmiMark = massMark / heightMark **2;
console.log(bmiMark);

let bmiJohn = massJohn / heightJohn**2;
console.log(bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);