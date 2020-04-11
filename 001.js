/** Find the sum of all the multiples of 3 or 5 below the provided 
    paramater value number.
*/
function multiplesOf3and5(number) {
  var sum = 0;
  var i;
  for (i = 0; i < number; i++){
    if ((i % 3 == 0) | (i % 5 == 0)) {
      sum += i;
    }
  }
  return sum;
}

multiplesOf3and5(1000);
