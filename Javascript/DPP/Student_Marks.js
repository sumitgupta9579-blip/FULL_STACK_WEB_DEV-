const sub1 = 60;
const sub2 = 45;
const sub3 = 73;

const totalMarks = sub1 + sub2 + sub3;
const average = totalMarks / 3;
const percentage = (totalMarks / 300) * 100;

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");