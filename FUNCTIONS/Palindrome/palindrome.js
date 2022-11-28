//Write a JavaScript function that checks whether a passed string is palindrome or not.
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or 
//nurses run.

function palindrome(word) {
    word = word.toUpperCase();
    let word2 = word.split(' ').join('');
    let word3 = word.split(' ').join('').split("").reverse().join("").toUpperCase();
    if (word2 === word3) {
        console.log("IT'S A PALINDROME!")
    } else {
        console.log("IT'S NOT A PALINDROME!")
    }
}

