//Create a program to read an integer value of x undefined times 
//(the program will stop when the value of x is equal to 0). To each x read, print out on 
//the screen the sum of the first 5 successive value starting from X, (including the x itself if x is pair). 
//For example, if the first value is 4, the output must be 40 (that is the result of the operation: 4+6+8+10+12), 
//whilst if the first value is 11, for example, the output must be 80 (that is the sum of 12+14+16+18+20).

let value = parseInt(prompt("Type a value"))
while (value != 0) {
if(value % 2 === 0) {
    let calculation = 5*value + 20
    alert(calculation) 
} else {
    let calculation = 5*value + 25
    alert(calculation) 
}
value = prompt("Type a value");
}

alert("Program finished");
