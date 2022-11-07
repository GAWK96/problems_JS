//Create a program to read a set of people names and their ages. The names must be stored in a vector, 
//and the ages in another one. 
//Then, print out on the screen the name of the oldest person.


let number = parseInt(prompt("Type the number of people"));
let name1 = [];
let age = [];
let age2 = 0;
let name2 = 'noOne';
for(let i = 0; i < number; i ++) {
    name1[i] = prompt("Type the name of the " + (i + 1) + "° person");
    age[i] = prompt("Type the age of the " + (i + 1) + "° person");
          if (age[i] > age2) {
            name2 = name1[i];
          }
}
console.log("Oldest person: " + name2);