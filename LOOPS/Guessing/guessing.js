//Create a program to read a maximum number, that will set the maximum value of a given numbers range, and then another number that will be
//the try of the user, trying to guess a number that will be generated randomly, which is in the range set before. If the corresponding number in the try is greater than the generated number, print out in the screen "TOO HIGH", whilst if it is less than the generated number print out in the screen "TOO LOW". When the user guess the number,
//print out on the screen the number of tries that were needed to guess it. 

let maximum = parseInt(prompt("Enter the maximum number!"));

let value1 = parseInt(Math.random()*maximum);
console.log(value1);

let guess = parseInt(prompt("Try to guess the number!"));
console.log(guess);

if (guess === value1) {
    alert("Number of tries = 1")
} else {
    i = 1
    while (guess !== value1) {
        if (guess > value1) {
            alert("TOO HIGH!")
            guess = parseInt(prompt("Try to guess the number!"));
            i = i + 1
        } else if (guess < value1) {
            alert('TOO LOW!')
            guess = parseInt(prompt("Try to guess the number!"))
            i = i + 1
        }
    }
    alert("Number of tries " + i)
}



