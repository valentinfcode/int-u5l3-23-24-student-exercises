let array = [1, 2, 3, 4, 5];
// 1. Use a forEach loop to print each element to the console.
array.forEach(function(array) {
    console.log(array);
});



// 2. Create an array of colors ['red', 'green', 'blue']. 
//  - Use a forEach loop to add "Color:" before each element and print them to the console. 
//  - The output should look like "Color: red", "Color: green", "Color: blue".
let colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
    console.log("Color: " + color);
});


let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(function(number) {
    console.log(sum += number);
});
// 3. Use a forEach loop to calculate and print the sum of all the elements in the array.
//  - There's a couple ways to solve this one - think through the logic and ask for support if you need it :)



let fruits = ["apple", "banana", "cherry"]
// 4. Use a forEach loop to print each element to the console.
fruits.forEach(function(fruit) {
  console.log(fruit)
});

let names = ["Simba", "Scar", "Nala", "Mufasa", "Zazu"];
// 5. Use a forEach loop to print each name along with its index number.
//  - Remember: the index can be put as a second parameter.
//  - Example: the first message should read something like "Simba (Index: 0)"
names.forEach(function(name, index) {
  console.log(name + " (Index: " + index + ")")
});
