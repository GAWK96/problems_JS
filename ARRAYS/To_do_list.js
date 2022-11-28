let todo = [];
let action = (" ");
while(action != 'QUIT'){
action = prompt("What would you like to do?").toUpperCase();
if (action === 'NEW') {
newElement = prompt("Add a Todo");    
todo.push(newElement)
console.log(newElement + " Added to the list");
} else if (action === 'LIST') {
    for(let print of todo){
        console.log(todo.indexOf(print) + ": " + print)
    }
} else if (action === 'DELETE') {
    index = parseInt(prompt("What index would you like to delete?"));
    while (todo[index] === undefined) {
        console.log("INDEX HASN'T BEEN FOUND! TRY AGAIN");
        index = prompt("What index would you like to delete?");
    }
    x = todo.splice(index,1);
    console.log("Item removed")
}
}
