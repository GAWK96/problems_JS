//Write a JavaScript function that generates all combinations of a string. 
//Example string : 'dog'
//Expected Output : d,do,dog,o,og,g

function combination(string) {
    let information = 'nothing';
    for (let i = 0; i < (parseInt(string.length)); i ++) {
        for(var j = i + 1; j <= (parseInt(string.length)); j++){
        information = console.log(string.slice(i,j));
        }
    }
}