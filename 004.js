/*
Project Euler: Problem 4: Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/
function largestPalindromeProduct(n) {
  let maxMultiple = 0;
  let minMultiple = 0;
  let i = 0;
  for (i = 0; i < n; i++){
    maxMultiple += (9 * Math.pow(10, i));
    if (i == n - 2){
      minMultiple = maxMultiple + 1;
    }
  }
  console.log(minMultiple + " and " + maxMultiple);
  let result = getMaxPalindrome(maxMultiple, minMultiple);
  console.log(result);
  return result;
}

function getMaxPalindrome(maxMultiple, minMultiple){
  let max = 0;
  let i = maxMultiple;
  let j = maxMultiple;
  for (i; i > minMultiple; i--){
    for (j = maxMultiple; j > minMultiple; j--){
      if (isProductPalindrome(i, j)){
        let product = (i * j);
        if (product > max){
          max = product;
        }
      }
    }
  } 
  return max; 
}

 
function isProductPalindrome(mult1, mult2){
  let product  = mult1 * mult2;
  //console.log("Checking " + product);
  let arr = Array.from(String(product), Number);
  let i = 0;
  for (i; i < (arr.length / 2); i++){
    if (arr[i] != arr[arr.length-1-i]){
      return false;
    }
  }
  return true;
}

largestPalindromeProduct(3);
