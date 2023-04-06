/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */

const hobbyList = document.querySelector('#hobby-list');

let groupHobbies = ['gardening', 'making music', 'reading books', 'hangout with my cat'];

for (let hobby of groupHobbies)
{
	console.log(hobby);
	hobbyList.innerHTML += `<li>${hobby}</li>`
}

console.log(groupHobbies.length);

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */
let colorArray = ['red', 'peach', 'teal', 'green'];
let tealCount = 0;
for (let color of colorArray) {
    if (color === 'teal') {
        tealCount++
    }
};
console.log(`${colorArray}, ${tealCount} was the number of times teal was found.`);

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */

let numberArray = [3, 6, 8, 12, 48, 40];
let oddNumbers = [];
let evenNumbers = [];

for (let number of numberArray)
{
	if (number % 2 === 0)
	{
		evenNumbers.push(number);
		// console.log(`Even numbers: ${number}`);
	}
	if (number % 2 !== 0)
	{
		oddNumbers.push(number);
		// console.log(`Odd numbers: ${number}`);
	}
}

console.log(numberArray);
console.log("Odd", evenNumbers);
console.log("Even", oddNumbers);


// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */

let boolArray = [true, false, false, true];
let toggled = [];
for (let bool of boolArray) {
    toggled.push(!bool);
}
console.log(boolArray);
console.log(toggled);
// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 */

let zeroArray = [0, 2, 1, 1, 0, 0, 0];
console.log(zeroArray.length)

for (let i = 7; i < zeroArray.length; i--) {
	console.log(i)
	if (i > 0) {
		zeroArray.pop();
		console.log(i)
		console.log("popped")
	}
	
}

console.log(zeroArray);

// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8
