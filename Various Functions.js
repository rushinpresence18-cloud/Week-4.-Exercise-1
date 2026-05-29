// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply
// all 3 numbers together. Note: The argument passed must NOT be the same number.

function multiply(num1, num2, num3) {

    if (num1 == num2 || num1 == num3 || num2 == num3) {
        return "Numbers must not be the same!"
    }

    return num1 * num2 * num3;

    let answer1 = multiply(2, 3, 4);
    let answer2 = multiply(5, 6, 7);
    let answer3 = multiply(8, 9, 10);

console.log(answer1);
console.log(answer2);
console.log(answer3);

} 

// TODO: Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and returns the amount in seconds. ***Donotuse a console.log() inside of the function***
const convertToSeconds = function(minutes) {
  return minutes * 60;
};

// TODO: Create a function called fahrenheitToCelsius that takes the temperatureasan parameter and returns the equivalent temperature in Celsius. ***Do not useaconsole.log() inside of the function***
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}


// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***
function reverseString(str) {
  return str.split('').reverse().join('');
}


// TODO: Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not useaconsole.log() inside of the function***
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}


// TODO: Create a “isPrime” function that takes a number as a parameter andreturnstrue if the number is prime, and false otherwise. Make sure to test your code with 4 numbers
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}



