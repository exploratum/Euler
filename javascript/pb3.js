// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function largestPrimeNumOf(n) {

    let prime = 1;
    upperBoundary = n

    while(true) {
        prime = smallestPrimeOf(upperBoundary);
        if(prime < upperBoundary) {
            upperBoundary /= prime;
        }
        else {
            return upperBoundary
        }

    }

}


//will always return a prime number with n being divided by the previous factor from the largestPrimeNum function
function smallestPrimeOf(n) {
    for(let i=2; i<Math.ceil(Math.sqrt(n)); i++) {
        if(n % i == 0) {
            return i;
        }
    }
    return n;
}

console.log(largestPrimeNumOf(600851475143))