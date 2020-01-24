// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindrome(n) {

    largestNumber = '';

    for(let i=0; i<n; i++) {
        largestNumber += 9
    }

    largestNumber = parseInt(largestNumber)

    for(let i=largestNumber; i>0; i--) {
        for(let j=largestNumber; j>0; j--) {
            let product = (i * j) + '';
            if((product+'').split('').reverse().join('') == product) {
                return product
            }
        }
    }

    return(0)
}

console.log(largestPalindrome(3))