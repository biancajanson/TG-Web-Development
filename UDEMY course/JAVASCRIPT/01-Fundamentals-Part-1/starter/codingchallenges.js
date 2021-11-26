// CODING CHALLENGE 1
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const bmiMark = massMark / heightMark **2;
const bmiJohn = massJohn / heightJohn**2;
// console.log(bmiMark, bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// CODING CHALLENGE 2
if (bmiMark > bmiJohn) {
    ;
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
}   else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)
}