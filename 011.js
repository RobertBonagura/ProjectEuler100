/**
What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in a given arr grid
*/
function largestGridProduct(arr) {
  
  let maxProduct = 0
  let i = 0
  let j = 0
  for (i = 0; i <= arr.length - 1; i++){
    for (j = 0; j <= arr.length - 4; j++){
      let row = arr[i][j] * arr[i][j+1] * arr[i][j+2] * arr[i][j+3]
      let column = arr[j][i] * arr[j+1][i] * arr[j+2][i] * arr[j+3][i]
      let diag_lr = 0
      let diag_rl = 0
      if (i <= arr.length - 4){
        diag_lr = arr[i][j] * arr[i+1][j+1] * arr[i+2][j+2] * arr[i+3][j+3]
        diag_rl = arr[i][j+3] * arr[i+1][j+2] * arr[i+2][j+1] * arr[i+3][j]
      }
      if (row > maxProduct) maxProduct = row
      if (column > maxProduct) maxProduct = column
      if (diag_lr > maxProduct) maxProduct = diag_lr
      if (diag_rl > maxProduct) maxProduct = diag_rl
    }
  }
  return maxProduct
}
