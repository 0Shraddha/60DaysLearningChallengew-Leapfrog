//non-curried function
function add(a, b){
    return a + b;
}

add(1); //add(1, undefined); 

//currying
function addFunc(a){
    return function(b){
        return a + b;
    }
}

let var1 = addFunc(2);
let result = var1(4)
console.log(result)

//currying with arrow
let curryingWArrowFunc = a => b => a + b;
console.log("Currying with arrow func : \n" +  curryingWArrowFunc(2)(5))

let makeGreeting = s1 => s2 => s1 + " " + s2;
console.log(makeGreeting('hello')('world'));

function sum(a){
    return function sum2(b,c){
        return a+b+c;
    }
}
console.log(sum(2)(3,3));
    
let sumsum = a => (b,c) => a+b+c;
console.log(sum(2)(3,3));


//Practical Usage:

//1. Pre-filling arguments
const applyDiscount = discount => price => price - price * discount;

const tenPercentOff = applyDiscount(0.10);

console.log(tenPercentOff(100)); // 90
console.log(tenPercentOff(200)); // 180


//2. Filtering with Custom Criteria : to filter users by their role
const users = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "user" }
]
    const byProperty = key => value => obj => obj[key] === value;
    const isAdmin = byProperty('role')('admin');
    const adminResult = users.filter(isAdmin);
    console.log(adminResult)

