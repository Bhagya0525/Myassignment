// Global scope

let genderType = "female";
function printGender() {
    let color = "brown";
    if (genderType=="female") {
var age = 30;
let color = "Yellow";
console.log("Color inside if block:", color);
    }
    console.log("Age:", age);
    console.log("Color outside if block:", color);
}
printGender();
console.log("Gender:", genderType);
genderType = "male";
let color = "White"
console.log("\nAfter changing genderType to male:", genderType);
console.log("colour:", color);


