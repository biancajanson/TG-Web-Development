// // CODING CHALLENGE 1
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightMark = 1.95

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const bmiMark = massMark / heightMark **2;
// const bmiJohn = massJohn / heightJohn**2;
// // console.log(bmiMark, bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;
// // console.log(markHigherBMI);

// // CODING CHALLENGE 2
// if (bmiMark > bmiJohn) {
//     ;
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
// }   else {
//     console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)
// }

// CODING CHALLENGE 3

const scoreDolphins1 = 96;
const scoreDolphins2 = 108;
const scoreDolphins3 = 89;
const scoreKoalas1 = 88;
const scoreKoalas2 = 91;
const scoreKoalas3 = 110;

console.log((scoreDolphins1 + scoreDolphins2 + scoreDolphins3)/3, (scoreKoalas1 + scoreKoalas2 + scoreKoalas3)/3);

if ((scoreDolphins1 + scoreDolphins2 + scoreDolphins3)/3 > (scoreKoalas1 + scoreKoalas2 + scoreKoalas3)/3) {
    console.log("The Dolphins have won!")
}   else if ((scoreKoalas1 + scoreKoalas2 + scoreKoalas3)/3 > (scoreDolphins1 + scoreDolphins2 + scoreDolphins3)/3) {
    console.log("The Koalas have won!")
}   else {
    console.log("There is a draw, so no one have won...")
}