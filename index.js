// Objects and Object Literals

const user = {
  name: "Sarah",
  age: 23,
  skill: "knitting",
  gender: "female"
};
user.learning = ["bread baking", "photography"];
//console.log(user)

// this is an object literal and then I used dot notation to add (manipulate) the data with additional properties

// bracket notation vs.dot notation
//console.log(user["age"])
//console.log(user.age)

// Functions and named parameters
const greetingPage = function(x, y) {};
greetingPage("Sarah", "Mike", "Rachel");

// Passing arguments using interpolation

//const greet = function(x) {
//    console.log('Hey ${x}')
//}
//const prompt = greeting("Sarah")
//greet(prompt)

// function invocation
//function getName() {
//  console.log('Sarah')
//}
//console.log(getName())

// Global Parameters and Scopes
//let num = user.age

//const getUserNum = function getUserNum() {
//num += 1;
//console.log(num)
//}
//getUserNum(num)

// Function declarations using if statements and return

//const gender = boyOrGirl
//function boyOrGirl(gender) {
// if (gender !== "female")
//return "Sorry, I'm a boy"
//}

//function sayHello(x) {
//  return 'Hello ${x}'
//}
//const users = "Sarah, Mike, Sally"
//console.log(sayHello())

//Scope and Execution Context

//const name = 'Sarah'
//function question() {
//  const name = 'Sarah'
//const skill = 'knitting'
//return `Hey ${name}, how long have you been ${skill}`
//}
//question()
//console.log(question())

//const person = {
//    name: "Mike",
//    age: 34,
//   skill: ["gardening and carpentry"],
//    gender: "male",
//   getSkill() {
//        return this.skill.map(function (skills) {
//           return `{this.name} likes ${skills}`
//        })
//    }
//}
//person.getSkill()
//console.log(getSkill)

// constructor functions using the new keyword

//function Member(name, age, skill, gender) {
//  this.name = "Leslie"
//this.age = 45
//this.skill = "sewing, macramae, and dying"
//  this.gender = "female"
//
//this.getMemberName = function() {
//  return `${name}`
//}
//}
//const user2 = new Member("Adam", 37, "Bike maintenance and fishing", "male")
//console.log(Member())

// Using map, filter and reduce with Arrays

const currentMembers = [
  { name: "Sarah", age: 23, skills: "sewing, photography, joint joining" },
  { name: "Mike", age: 45, skills: "laser etching, photography, carpentry" },
  { name: "Leslie", age: 62, skills: "sewing, photography, crochet" }
];

const findMember = currentMembers.map(function({ name, skills }) {
  return name, skills;
});
const findPhotography = currentMembers.filter(function({ skills }) {
  if (skills === "photography") {
    return true;
  }
  return false;
});
console.log(findPhotography);
