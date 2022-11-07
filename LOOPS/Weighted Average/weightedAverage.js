let value = parseInt(prompt("How many cases you are goint to read?"));


for(i = 0; i < value; i++){
    let n1 = parseFloat(prompt("Type the first value"));
    let n2 = parseFloat(prompt("Type the second value"));
    let n3 = parseFloat(prompt("Type the third value"));
    let average = (n1*2 + n2*3 + n3*5)/(10);
    alert("weighted average = " + average.toFixed(2))
}