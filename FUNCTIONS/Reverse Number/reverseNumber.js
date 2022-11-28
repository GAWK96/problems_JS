//Write a JavaScript function that reverse a number. 
//Example x = 32243;
//Expected Output : 34223

function element(number) {
 return number.toString().split("").reverse().join("")
 }

 //split("") = convert a string into a array, in which each letter of the string becomes an element of the array.
 //reverse("") = reverts the order of the element of the array
 //join("") = converts back a array into a string.
