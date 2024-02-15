//use "filtre" function

//Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(num => num >= 5);
console.log("Numbers greater than or equal to 5:", filteredNumbers);

//Given an array of numbers, return a new array that only includes the even numbers.

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

//Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const strings = ["hello", "world", "python", "javascript", "programming"];
const filteredStrings = strings.filter(string => string.length <= 5);
console.log("Strings with length less than or equal to 5:", filteredStrings);

//Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const people = [
  { name: "Ahmed", age: 25, club: true },
  { name: "Ala", age: 30, club: false },
  { name: "Rami", age: 20, club: true },
];
const clubMembers = people.filter(person => person.club);
console.log("Club members:", clubMembers);

//Make a filtered list of all the people who are old enough (older than 18) 

const adults = people.filter(person => person.age > 18);
console.log("Adults:", adults);







