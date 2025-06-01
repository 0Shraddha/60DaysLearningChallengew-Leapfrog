//JS Higher-Order Function

const groceries = [
    { name: "Mango", price: 125},
    { name: "Cheese", price: 150 },
    { name: "Bread", price: 70 },
]

//using map() to get all names in uppercase
const itemNames = groceries.map(item => item.name.toUpperCase());
console.log("Items in uppercase : " , itemNames);

//using filter() to get the items whose price is greater than 100
const expensiveItems = groceries.filter(item => item.price > 100);
console.log("Expensive items : " , expensiveItems);
console.log("Expensive items : " + JSON.stringify(expensiveItems, null, 2));   // 'null, 2' makes the output pretty-printed.


//using sort() to order the items in ascending order from its name
const ascOrderItems = groceries.sort((a, b) => a.name.localeCompare(b.name)); //localecompare() compares strings alphabetically
console.log("Items in ascending order : " , ascOrderItems);

//using reduce() to get a single value(get total cost)

const totalCost = groceries.reduce((sum, item) => sum + item.price, 0); //here sum = 0 (initial value = 0)
console.log("Total cost : ", totalCost);