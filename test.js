// Function to calculate the factorial of a number
function factorial(n) {
    // Factorial of 0 is 1
    if (n === 0) {
        return 1;
    }

    // Initialize result
    let result = 1;

    // Multiply result by each number up to n
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Test the function
const number = 5;
console.log(`The factorial of ${number} is: ${factorial(number)}`);
