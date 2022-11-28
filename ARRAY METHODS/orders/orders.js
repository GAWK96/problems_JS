const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: false, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];

// Exercises

// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.


// 2) Create a new property on each order with the total price of items ordered.


// 3) Have all the orders been delivered?


// 4) Has the customer with ID '123' made any orders?


// 5) Have any products with an id of 123 been sold?

//SOL:
//1 
const id234 = orders.filter(function(id){
    return id.customerId === '234'
})

const notDelivered = id234.filter(function(not){
    return not.delivered === false
})

const notDelivered2 = notDelivered.map(function(itemsNdelivered){
    return `Order id: ${itemsNdelivered.orderId}`
})

//2
const arrayItems = orders.map(function(item){
let totalPrice = item.items.reduce((sum,prc) => sum + prc.price,0);
return {...item,totalPrice}
})

//3
function dlvrd () {
const deliv = orders.every(check => check.delivered === true )
if (deliv === false) {
    console.log("All the orders haven't been delivered. Some has been delivered, but some hasn't been.")
} else {console.log("All the orders have been delivered")}
}

//4
function anyOrder(){
const anyOrder =  orders.some(check => check.customerId === '123')
if (anyOrder === true) {
    console.log("The customer with ID 123 made at least 1 order")
}else {
    console.log("The customer with ID 123 didn't make any order")
}
}

//5 
const anyProducts = orders.map(function(item)
{
return item.items    
})


let check = ['']
let sum = ['null']
let k = 0
for (let i = 0; i < anyProducts.length; i++) {
    for (let j = 0; j < anyProducts[i].length ; j++){
        if (anyProducts[i][j].productId === '123') {
            sum[k] = 'true' 
            k = k + 1
        } else if (anyProducts[i][j].productId !== '123') {
            sum[k] = 'false'
            k = k + 1
        }
    }
}



var anyProduct = sum.some(check => check === 'true')

function any() {
    if (anyProduct === true) {
        console.log("There's at least 1 product with ID 123 that has been sold")
    } else if (anyProduct === false) {
        console.log("There isn't any product that has been sold")
    }
}