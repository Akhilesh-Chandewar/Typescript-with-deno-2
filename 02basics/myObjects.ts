const User = {
    name : "shaun",
    email : "Yt9tV@example.com",
    isActive : true
}

function createUser({name : string, isPaid : boolean}) {}

createUser({name : "shaun", isPaid : true})
let newUser = {name : "shaun", isPaid : true , email : "Yt9tV@example.com"}
createUser(newUser)

function createCourse():{name : string, price : number} {
    return {
        name : "reactjs",
        price : 399
    }
}

type User = {
    name : string,
    email : string,
    isActive : boolean
}

function createUser2(user : User) : User {
    return user
}

createUser2({
    name : "shaun",
    email : "Yt9tV@example.com",
    isActive : true
})

