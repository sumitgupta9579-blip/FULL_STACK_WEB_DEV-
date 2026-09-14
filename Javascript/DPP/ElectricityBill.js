let units = 250;
let bill_amount = 0;

if (units <= 100) {
    bill_amount = units * 5;
}
else if (units <= 200) {
    bill_amount = (100 * 5) + ((units - 100) * 7);
}
else {
    bill_amount = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log("Electricity Bill: ₹" + bill_amount);