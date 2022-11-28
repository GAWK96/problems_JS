//Write a JavaScript function that accepts a string as a parameter and converts the 
//first letter of each word of the string in upper case. 

//Example string : 'the quick brown fox'
//Expected Output : 'The Quick Brown Fox 

function cap(string) {
    let string2 = " "
    let string3 = " "
    let string4 = " "
    let i = 0;
    string2 = string.split(" ");
    while (i <= string2.length - 1) {
    string3 = string2[i].slice(0,1).toUpperCase();
    string4 = string2[i].slice(1);
    string2[i] = string3.concat(string4);
    i ++
    }
    return (string2.join(" "));
 
}