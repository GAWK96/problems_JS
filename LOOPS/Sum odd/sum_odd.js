//Create a program to read 2 integer numbers (regardless the order). 
//Then, calculate and print out on the screen the sum of the odd numbers between them.

let value1 = parseInt(prompt("Type the first value"));
let value2 = parseInt(prompt("Type the second value"));
sum1 = 0;
sum2 = 0;
if(value1 > value2) {
    sum1 = value2
if (value2 % 2 == 0) {
    sum1 = sum1 + 1;
    sum2 = sum1
    while (sum1 < (value1 - 2)){
sum1 = sum1 + 2;
sum2 = sum2 + sum1;

console.log("sum 2 = " + sum2);
console.log("sum 1 = " + sum1);
}
}else if(value2 % 2 != 0){
    sum1 = sum1 + 2;
    sum2 = sum1
    while (sum1 < (value1 - 2)) {
    sum1 = sum1 + 2;
    sum2 = sum2 + sum1;
    
    console.log("sum 2 = " + sum2);
    console.log("sum 1 = " + sum1);
    }
}
}

if(value2 > value1) {
    sum1 = value1
    if(value1 % 2 == 0) {
        sum1 = sum1 + 1;
        sum2 = sum1
        while (sum1 < (value2 - 2)) {
            sum1 = sum1 + 2;
            sum2 = sum2 + sum1;
            
            console.log("sum 2 = " + sum2);
            console.log("sum 1 = " + sum1);
        }
    }else if(value1 % 2 != 0) {
        sum1 = sum1 + 2;
        sum2 = sum1
        while (sum1 < (value2 - 2)) {
            sum1 = sum1 + 2;
            sum2 = sum2 + sum1;
            
            console.log("sum 2 = " + sum2);
            console.log("sum 1 = " + sum1);
        }
    }
}

console.log("THE SUM OF ODD NUMBERS IS = " + sum2)

