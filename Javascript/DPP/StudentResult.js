let sub1 = 84;
let sub2 = 95;
let sub3 = 45;
let avg = (sub1 + sub2 + sub3)/3;
if(sub1 >=40 && sub2 >= 40 && sub3 >=40){
    if(avg>=75) console.log("Distinction");
    else if(avg>=60) console.log("First Division");
    else if(avg>=50) console.log("Second Division");
    else console.log("Pass");

}
else{
    console.log("Fail");
}