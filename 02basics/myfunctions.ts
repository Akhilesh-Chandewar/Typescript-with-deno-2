function addTwo(num : number){
    // console.log(num.toUpperCase());
    return num + 2;
}
console.log(addTwo(3));

function getUpper(val : string) {
    return val.toUpperCase();
}
console.log(getUpper("hello"));

function signUpUser(name : string , email : string , isPaid : boolean) {}
signUpUser("shaun", "Yt9tV@example.com", true);

let loginUser = (name : string , email : string , isPaid : boolean = false) => {}
loginUser("shaun", "Yt9tV@example.com");

function getValue(myVal : number) : boolean | string {
    if (myVal > 5) {
        return true;
    } else {
        return "200 OK";
    }
}
console.log(getValue(6));
console.log(getValue(4));


// Simulated API function to fetch user data
function fetchUserData(userId: number): Promise<{ id: number; name: string }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: "John Doe" });
            } else {
                reject("User not found");
            }
        }, 2000); // Simulates a 2-second delay
    });
}

// Asynchronous function using async/await
async function getUserDetails(userId: number): Promise<string> {
    try {
        const user = await fetchUserData(userId);
        return `User Found: ${user.name}`;
    } catch (error) {
        return `Error: ${error}`;
    }
}

// Call the async function
getUserDetails(1).then((message) => console.log(message)); // "User Found: John Doe"
getUserDetails(2).then((message) => console.log(message)); // "Error: User not found"
