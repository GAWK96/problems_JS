//Create program to read a name, age and height of N people. Then, print out on the screen the average height
//of the group and the percentage of people with less than 16 years old and their names, should exists. 
//Then, ask for the name of a person among the group  and print out on the screen his/her name followed by the height and age.


let number = parseInt(prompt("How many people will be read?"))
const name1 = [];
const age = [];
const height = [];
let sumHeight = 0;
let bellow16 = 0;
for (let i = 0; i < number; i++) {
    console.log("Data of " + (i + 1) + "º person")
        name1[i] = (prompt("Type a name")).toUpperCase();
        console.log("Name = " + name1[i]);
        age[i] = parseInt(prompt("Type a age"));
            if(age[i] < 16) { bellow16 = bellow16 + 1
            }
        console.log("Age = " + age[i]);    
        height[i] = parseFloat(prompt("Type a height"));   
        sumHeight = sumHeight + height[i];
        console.log("Height = " + height[i]);   
}

let averageHeight = (sumHeight/number);
let percentageBellow16 = ((bellow16/number)*100)
console.log("Average Height = " + averageHeight.toFixed(2));
console.log("People with less than 16 years old = " + percentageBellow16.toFixed(2) +"%");

for (let i = 0; i < number; i++) {
    if (age[i] < 16) {
        console.log(name1[i])
    }
}

let pull = prompt("Type a name").toUpperCase();
for (let i = 0; i< number; i++) {
    if (pull == name1[i]) {
        console.log(name1[i] + " Age = " + age[i] + ", Height = " + height[i]);
    }
}



