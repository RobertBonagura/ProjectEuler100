/*
Project Euler: Problem 5: Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from
1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the
numbers from 1 to n?
*/
function smallestMult(n){
  let i = n;
  while (true) {
    let j = 1;
    for (j; j <= n; j++){
      if (i % j != 0){
        break;
      }
      if (j == n){
        return i;
      }
    }
    i++;
  }
}

smallestMult(20)
