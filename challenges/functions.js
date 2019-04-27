// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
let saysOk = function (cmd1, cmd2, cb) {
  console.log(`This ${cmd1} tastes like ${cmd}, did we cook it for ${cb} minutes?`);
};

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add (num1, num2){
  return num1 + num2;
};

add(1,2);
function multiply (num1, num2){
  return num1 + num2;
};

function greeting (firstN, lastN){
  return (`Hello ${firstN} ${lastN}, nice to meet you!`);
};

function consume (num1, num2, cb){
  return cb(num1, num2);
};
/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// Because it is all in the same scope. If it was in the global scope it would have issues. 

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();