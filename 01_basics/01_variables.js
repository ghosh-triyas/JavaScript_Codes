// there are mainly three ways to define variables.
// const,let,var
// const is used to define a memory space whose value is constant
// var and let are used to define memory spaces whose values are variable
// var are not used nowdays due it's issues in block scope and functional scope.(anyone can change the value outside scope also. behaved like global variables of c++)
// don't use var only use let
// in js variables can also be declared without var or let. but not recommended.
const userId = 12345
var email = "triyas@google.com"
let password = "12390"
city = "kolkata"

console.log(userId);

// console.table([...]) is used to print multiple values in a tabular format

console.table([userId, email, password, city])

// any variable which is not initialized but used in console.log or console.table is showed undefined not any garbage values like in c++

let state;

console.table([userId, email, password, city, state])
