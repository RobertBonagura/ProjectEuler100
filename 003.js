/**
Project Euler: Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the given number?
*/
function largestPrimeFactor(number) {
  var denominator = 2;
  var candidate =  Math.floor(number/denominator);
  while (candidate > 1){
    if (number % candidate == 0){
      if (isPrime(candidate)){
        return candidate;
      }
    }
    denominator++;    
    candidate = Math.floor(number/denominator);
  }
  return number;
}

function isPrime(number) {
  var i;
  var midpoint = Math.floor(number/2);
  for (i = 2; i <= midpoint; i++){
    if (number % i == 0){
      return false;
    }
  }
  return true;
}

largestPrimeFactor(13195);
