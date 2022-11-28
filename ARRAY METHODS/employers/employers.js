const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// Exercises

// 1) What is the average income of all the people in the array?


// 2) Who are the people that are currently younger than 30?


// 3) Get a list of the people's full name (firstName and lastName).


// 4) Get a list of people in the array ordered from youngest to oldest.


// 5) How many people are there in each department?

//SOL:
//1:

const average = people.reduce((total, sal) => total + parseInt(sal.salary),0)/(people.length)

//2

let newDate1 = [];
let newDate2 = [];
let newPeople = {};

for(i = 0; i < people.length; i ++) {
    var date1 = new Date(people[i].DOB);
    var date2 = new Date();
    newDate1[i] = (date2.getTime() - date1.getTime());
    newDate2[i] = parseInt(Math.ceil(newDate1[i]/(1000*3600*24)));
}

for(i = 0; i < people.length; i ++) {
    newPeople[i] = {Name: people[i].firstName, age: newDate2[i]};
    }

const values = Object.values(newPeople);
console.log(values)

const younger30 = values.filter(function(old){
    return old.age < 10957
})

const list = younger30.map(function(lst){
    return `The name of the people who are younger than 30 are: ${lst.Name}`
})

//3
const fullName = people.map(function(first){
    return `${first.firstName} ${first.lastName}`
})


//4 
let newDate3 = JSON.parse(JSON.stringify(newDate2))
let check3 = 0
let check2 = 0

const sortAge = newDate3.sort((a,b) => {
    return a - b 
})

for (x = 0;x < newDate3.length; x++) {
    check3 = newDate3[x]
    for (j = 0; j < newDate2.length; j ++)
        { 
            check2 = newDate2[j]
        if (check3 === check2) {
            console.log(`${fullName[j]} : ${newDate3[x]} (days)`)
        }
 }
}


//5

let Dev = 0
let Mark = 0
let Sal = 0
let Off = 0

function eachDepartment(){
for(i = 0; i<people.length; i++){
    if (people[i].department === 'Development') {
        Dev = Dev + 1
    } else if (people[i].department === 'Marketing') {
        Mark = Mark + 1
} else if (people[i].department === 'Sales') {
    Sal = Sal + 1}
    else if (people[i].department === 'Office Management') {
        Off = Off + 1
    }
}
console.log(`Development = ${Dev}`)
console.log(`Marketing = ${Mark}`)
console.log(`Sales = ${Sal}`)
console.log(`Office = ${Off}`)
}
