//Create a prompt that will pop up on the webpage inquiring the visitor to enter a list of froyo flavors separated by commas
const userInput = prompt(`Enter each froyo flavors separated by a comma:`,'vanilla, vanilla, vanilla, vanilla, vanilla');

//Use array method to change the user-input list into an array
const froyoArray = userInput.split(', ');

//Create an empty object to store the froyo flavors
  //The object should be dynamic, meaning new flavors can be added as new 'Key' properties, and any repeated flavors will be added as a numeric value
const froyoFlavors = {};

//Create a function
const froyoOrders = (flavors) => {

  //Create a 'for-loop' to iterate through the user input array
  for (let i = 0; i < froyoArray.length; i++) {
  //Use if-else statements to check whether the flavor already exist in the object
    //If the flavor already exist, then add it as a +1 to the existing count of that flavor
    if (froyoFlavors[froyoArray[i]]) {
      froyoFlavors[froyoArray[i]]++
      //if the flavor does not exist, this 'if' statement will parse as 'undefined', which is equivalent to a falsy value, which will move the code to the 'else' statement
  
    //If the flavor does not exist, then add that flavor as a new key property and set the value of that new key to 1 (representing a count of 1)
    } else {
      froyoFlavors[froyoArray[i]] = 1
    };
  };
  return froyoFlavors
};

//Display the output in the console in table format
console.table(froyoOrders(froyoArray))