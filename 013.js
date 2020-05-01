i/*
Work out the first ten digits of the sum of the following one-hundred 
50-digit numbers.
*/
function largeSum(arr){
  let A = []
  for (x in arr){
    A[x] = (""+arr[x]).split("")
  }
  let B = []
  for (x in A){
    B.unshift(A[0][x] + A[1][x])
  }
  console.log(B)
}
