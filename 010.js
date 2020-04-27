/*
Project Euler: Problem 10: Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n
*/
function primeSummation(n) {
  let primes = [2, 3]; 
  let level = 1;
  let num = (6 * level) - 1;    // checking only (6n-1) and (6n+1) for prime
  var sum = primes[0] + primes[1];
  while (num < n){ 
    if (isPrime(num, primes)){
      sum += num;
      primes.push(num);
    }   
    num+=2;
    if (num >= n){ 
      return sum;
    } else {
      if (isPrime(num, primes)){
        sum += num;
        primes.push(num);
      }   
      level++;
      num = (6 * level) - 1;
    }   
  }
  return sum;
}
  
function isPrime(num, primes){
    let x = 0;
    let sqrtNum = num ** 0.5;
    while (primes[x] <= sqrtNum){
      if (num % primes[x] == 0){ 
        return false;
      }   
      x++;
    }   
    return true;
}
