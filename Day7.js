function printFirstName(name){
   return name;
}
function printLastName(name){
    return name;
 }
export { printFirstName, printLastName };


const printDemo = () => {
 }
export {printDemo};

function print(){
    console.log("this is default example")
}
export default print;


//import { printFirstName, printLastName } from './Day7.js';
//import print from './Day7.js';


//Renaming to avoid naming convention
//greet1.js
/*    const greet = () => {
        console.log(“hello”);
    }
    //greet2.js
    const greet = () => {
        console.log(“Namaste”);
    }
    export { greet };
*/
//import { greet as englishGreeting } from ‘./greet1.js’;
//import { greet as nepaliGreeting } from ‘./greet2.js’;



