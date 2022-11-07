//Create a program to read an integer N. This value is going to be the quantity of integer values of X that 
//will be read. Print out on the screen how many of these values are within the range [10,20] 
//and how many will be out the range.

let n = parseInt(prompt("How many values you will type?"))
let fora = 0 ;
let dentro = 0 ;
for (let i = 1; i <= n ; i ++)
{
    value = parseInt(prompt("Type a value"));
    if (value >= 10 && value <= 20) {
        dentro = dentro + 1;
    } else if (value < 10 || value > 20 ) {
        fora = fora + 1;
    }}

    console.log("IN = " + dentro)
    console.log("OUT = " + fora)
