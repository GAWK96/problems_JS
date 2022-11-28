const users = [
    { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' }, 
    { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' }, 
    { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' }, 
    { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' }, 
    { id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' }, 
    { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' }, 
    { id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' }, 
    { id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' }, 
    { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' }, 
    { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' }, 
];

const comments = [
    { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
    { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? 😲' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
    { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
    { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
];


// Exercises


// 1) What is Madison Marshall's user id?

const id2 = users.filter(function(getId){
    if (getId.lastName === 'Marshall'){
        return getId.id;
    }
})
const id3 = id2.map(function(getId2)
{
return `the user ID of ${getId2.firstName} ${getId2.lastName} is ${getId2.id}`
}
)

// 2) Who wrote the first comment (assuming the first comment is in position 0 of the comments array)

const firstComment = users.filter(function(first){
    if (first.id === comments[0].userId){
        return first.id;
    }
})

const whoWrote = firstComment.map(function(wrote){
    return `The user who wrote the first comment was: ${wrote.firstName} ${wrote.lastName}`
})

// 3) Which user commented 'OK great thanks'?

const nameUser = comments.filter(function(commented)
{
    if (commented.text === 'OK great thanks')
    {
        return commented.userId
    }
})

const whoCommented = users.filter(function(commented)

{
    if (commented.id === '7f053852-7440-4e44-838c-ddac24611050') 
    {
        return commented.id
    }

})

const mapUser =  whoCommented.map(function(commented) {
return `The user who commented "Ok great thanks" is ${commented.firstName} ${commented.lastName}`
})

// 4) Add the user's first and last name to each comment in the comments array
let users2 = JSON.parse(JSON.stringify(users))

for (let i = 0; i < users2.length ; i++) {
    delete users2[i].id
    }

for (i = 0; i < users.length; i++) {
    var checkElementcomments = users[i].id
    for (let j = 0; j < comments.length; j ++) {
    var checkElementUsers = comments[j].userId
    if (checkElementcomments === checkElementUsers) {
        Object.assign(comments[j],users2[i])
    }    
    }
}


// 5) Get a list of the users who haven't commented
const newArray1 = users.map(function(setApart)
{
    return setApart.id;
})

const newArray2 = comments.map(function(setApart)
{
    return setApart.userId;
})

function hvntCommented () {
    console.log("list of the users who haven't commented:")
for (let i = 0; i < newArray1.length ; i++)
{
var check = newArray2.includes(newArray1[i])

if (check === false) {
    console.log(newArray1[i])
}
}
}
