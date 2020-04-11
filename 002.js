// By considering the terms in the Fibonacci sequence whose values do not
// exceed n, find the sum of the even-valued term.
function fiboEvenSum(n) {
   var array = [];
   var i = 0;
   var sum = 0;
   while (true){
      if (i == 0){
         array[i] = 1;
      } else if (i == 1) {
         array[i] = 2;
         sum += 2;
      } else {
         var value = array[i-1] + array[i-2];
         if (value > n){
            return sum;
         }
         array[i] = value;
         if (value % 2 == 0){
            sum += value;
         }
      }
      i++;
   }
}
