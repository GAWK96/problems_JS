function returnDay(number) {
if (number < 1 || number > 7 ){
    return null;
} 

{
    const days = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
} 
return Object.keys(days)[number - 1]
} }