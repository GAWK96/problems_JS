//Print out on the screen the multiplication table of a number (1-10).

let value = parseInt(prompt("Type a number"))

while (value > 10 || value < 0) {
     alert("TYPE A VALUE BETWEEN 1 AND 10");
     value = parseInt(prompt("Type a number"));
}

for (i = 0; i <= 10; i ++) {
    let calculation = value*i
    console.log(value + " x " + i + " = " + calculation);
}