// Function to check whether a number is Positive, Negative, or Zero
function checkNumberType(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
// variable declaration and initialization
let num = -33;
// calling the function to print the result
console.log("The number " + num + " is " + checkNumberType(num));