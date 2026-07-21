// Declare a global variable
let browser = "Chrome";
// Function that accepts a callback
function checkBrowserVersion(callback) {
    setTimeout(() => {
        callback(browser);
    }, 2000); 
}
// Callback function
function displayBrowserVersion(version) {
    console.log("Browser version using callback:", version);
}
//Call the function and pass the callback
checkBrowserVersion(displayBrowserVersion);