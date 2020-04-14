/*
Project Euler: Problem 6: Sum square difference

The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385

The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural
numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural 
numbers and the square of the sum.
*/
function sumSquareDifference(n){
  let sumOfSquares = sumOfSqrs(n);
  let squareOfSums = sqrOfSums(n);
  let result = squareOfSums - sumOfSquares;
  return result;
}

function sumOfSqrs(n){
  let sum = 0;
  let i = 1;
  for (i; i <= n; i++){
    sum += Math.pow(i, 2);
  }
  return sum;
}

function sqrOfSums(n){
  let sum = 0;
  let i = 1;
  for (i; i <= n; i++){
    sum += i;
  }
  return Math.pow(sum, 2);
}

