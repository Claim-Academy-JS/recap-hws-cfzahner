// log numbers from 1 to 100

let currentNum = 1;
while (currentNum <= 100) {
  currentNum++;

  // if number is divisible by 3 and 5, log fizz buzz

  if (currentNum % 3 === 0 && currentNum % 5 === 0) {
    console.log(`Fizz! Buzz!`);
  }

  // if number is divisible by 3, log fizz
  else if (currentNum % 3 === 0) {
    console.log(`Fizz!`);
  }

  // if number is divisible by 5 then log buzz
  else if (currentNum % 5 === 0) {
    console.log(`Buzz!`);
  } else {
    console.log(currentNum);
  }
}
