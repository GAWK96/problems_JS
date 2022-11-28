//Define a function called capitalize that accepts a string argument and returns a new string 
//with the first letter capitalized (but the rest of the string unchanged). 

function capitalize(string) {
    return string.toUpperCase().slice(0,1).concat(string.slice(1));
    }