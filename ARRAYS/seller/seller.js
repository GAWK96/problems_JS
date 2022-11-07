//A seller wants to make a price survey of the profit of the products that he commercialize. So, he ordered
//to type a set of N products, each one containing a name, price of purchase and price of sale. Create a 
//program to read these data in order to set and print out on the screen how many products yielded: 

//profit<10% 
//10%≤ profit ≤ 20% 
//and profit > 20%. 

//Set as well the total value of purchase and sale of all the products, as well as the total profit.

let number = parseInt(prompt("How many products will be typed?"));
let name1 = [];
let purchase1 = [];
let sell = [];

for(let i = 0; i < number; i++) {
    console.log("Product " + (i + 1))
    name1[i] = prompt("Type the name of the product");
    console.log("Name of the product  = " + name1[i])
    purchase1[i] = parseFloat(prompt("Type the price of purchase"))
    console.log("Price of purchase  = " + purchase1[i].toFixed(2))
    sell[i] = parseFloat(prompt("Type the price of sell"))
    console.log("Price of sell  = " + sell[i].toFixed(2))
}

let profit1 = 0;
let profit2 = 0;
let profit3 = 0;
let profit = 0;

for(let i = 0; i < number; i++) {
    profit = sell[i] - purchase1[i]
    percentage = (profit/purchase1[i])
    if (percentage < 0.1) {
        profit1 = profit1 + 1
    } else if (percentage <= 0.2 && percentage >= 0.1) {
        profit2 = profit2 + 1
    } else if (percentage > 0.2) {
        profit3 = profit3 + 1
    }
}

let purchase = 0;
let salles = 0;

for(let i = 0; i < number; i++) {
purchase = purchase + purchase1[i];
salles = salles + sell[i]; 
}

totalProfit = salles - purchase;

console.log("Final Report:")
console.log("PROFIT LESS THAN 10% = " + profit1);
console.log("PROFIT BETWEEN THAN 10% AND 20% = " + profit2);
console.log("PROFIT GREATER THAN 20% = " + profit3);
console.log("TOTAL VALUE OF PURCHASE = " + purchase.toFixed(2));
console.log("TOTAL VALUE OF SALLES = " + salles.toFixed(2));
console.log("TOTAL PROFIT = " + totalProfit.toFixed(2));