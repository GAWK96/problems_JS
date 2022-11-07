//Create a program to read an unknown number of data, each one containing an age of a person. 
//The last data, which will not be calculated, will contain a negative age value. Calculate and print out 
//the average age of this group of people. If a negative value is typed on the first time, 
//print out on the screen “IMPOSSIBLE TO CALCULATE”.

let value = parseInt(prompt("Type the first age"));
let num = 0;
let sum = 0;
if(value < 0) {
    alert("IMPOSSIBLE TO CALCULATE")
}else{
    while(value > 0) {
        num = num + 1
        sum = value + sum
        value = parseInt(prompt("Type the age"))
    }
    let average = sum/num
alert("THE AVERAGE IS " + average.toFixed(2))
}
