//Create a program to read an integer X. Then, print out on the screen the odds between 1 and x, 
//a value per line, including x if needed.

let x = parseInt(prompt("Type a value"))
let number = 1
if (x%2 != 0) {
    console.log(number)
    while (number < x) {
        number = number + 2
        console.log(number)
    }
} else {
    console.log(number)
    while (number < (x -1)) {
        number = number + 2
        console.log(number)
    }

}