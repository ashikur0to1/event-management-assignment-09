#### Questions And Answers

1.

let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: `greetign` is not defined
C: undefined

Answer: B: ReferenceError: `greetign` is not defined

Explanation: In the code, there is a typographical error. Instead of assigning an empty object to the variable greeting, here mistakenly wrote `greetign`. As a result, when attempt to log greetign, JavaScript does not recognize it as a defined variable, leading to a ReferenceError.

2.

function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3

Answer: C: "12"

Explanation: JavaScript performs type coercion in this case. It converts the number 1 to a string and then concatenates it with the string "2", resulting in the string "12". Therefore, the sum function returns the string "12" when you pass 1 and "2" as arguments.


3.

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Answer: A: ['🍕', '🍫', '🥑', '🍔']

Explanation: The food array is not modified in the code. Only the info.favoriteFood property is changed to "🍝," but this doesn't affect the original food array. Therefore, the food array remains as ['🍕', '🍫', '🥑', '🍔'].


4.

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError


B: Hi there, undefined

Explanation: The sayHi function expects an argument name, but when it's called with sayHi(), no argument is provided. In JavaScript, when a parameter is not provided, it defaults to undefined. Therefore, the function returns "Hi there, undefined."


5.

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4


Answer: C: 3

Explanation: The forEach loop iterates through the elements in the nums array. The if (num) condition checks if each element is truthy (not equal to 0 in JavaScript), and for the elements 1, 2, and 3, it evaluates to true. Therefore, count is incremented for each of these elements, resulting in a final value of 3.