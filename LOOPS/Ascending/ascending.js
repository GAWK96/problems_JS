//Create a program to read an unknown pair of integer values X and Y. To each X and Y, write a message 
//that indicates if these values were written in ascending or descending order. The program must end 
//when two equal values are typed.

let firstNumber = parseInt(prompt("Type the first value"))
let secondNumber = parseInt(prompt("Type the second value"))

while(firstNumber != secondNumber) {
    if(firstNumber < secondNumber ) {
        alert("THE NUMBERS WERE TYPED IN ASCENDING ORDER")
    }else {
        alert("THE NUMBERS WERE TYPED IN DESCENDING ORDER")
    }
    firstNumber = parseInt(prompt("Type the first value"))
    secondNumber = parseInt(prompt("Type the second value"))
}
alert("THE NUMBERS ARE EQUAL")