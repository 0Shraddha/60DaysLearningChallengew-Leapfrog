//FUNCTION Hoisting

makeGreeting()
function makeGreeting(){
    console.log("Hello World!")
}


//VARIABLE hoisting
x = 10;
console.log("X : " + x);
var x;

//CLASS hoisting
const Dog = new Animal('Pookie'); // ReferenceError: Cannot access 'Animal' before initialization
class Animal{
    constructor(name){
    return name;
}
}
console.log("Dog  : " + Dog.name)


//Example of nested functions

printHello()
    // hello

//printDillion()
    // ReferenceError: printDillion is not defined

function printHello() {
  console.log('hello')

  printDillion(); // declare int his scope

  function printDillion() {
    console.log("dillion")
  }
}

  /* 
    Since we have defined earlier, hoisting simply means declaring the variable/ function to the top of the current scope .
    BUT in this case, the top of cuurent scope for printDillion would be under that printHello();
    */