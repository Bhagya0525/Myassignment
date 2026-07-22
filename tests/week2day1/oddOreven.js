// Function to check whether a number is Odd or Even
function isOddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
// variable declaration and initialization
let num = 15;
// function call to print the result
console.log("The number " + num + " is " + isOddOrEven(num));