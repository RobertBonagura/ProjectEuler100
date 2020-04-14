/*
Project Euler: Problem 9: Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for
which,

a^2 + b^2 = c^2

For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc such that a + b + c = n.
*/
function specialPythagoreanTriplet(n) {
  var i = 1;
  var j = 1;
  var k = 1;
  for (i = 1; i < n; i++){
    for (j = 1; j < n; j++){
      if (i > j){
        continue;
      }
      for (k = 1; k < n; k++){
        if (j > k){
          continue;
        }
        if (i + j + k == n){
          if ( Math.pow(i, 2) + (Math.pow(j, 2)) == Math.pow(k, 2)){
            let product = i * j * k;
            return product;
          }
        }   
      }   
    }   
  }
 return -1; 
}

specialPythagoreanTriplet(1000);

