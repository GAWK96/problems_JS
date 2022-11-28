//Write a JavaScript function that returns a passed string with letters in alphabetical order. 

//Example string : 'webmaster'
//Expected Output : 'abeemrstw'

function alphabetical(string){
    return string.split("").sort().join("");
}