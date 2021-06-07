// factorial using recursion
function factorial(num) {
    // base condition
    if(num === 0 || num === 1) {
        return 1
    } else {
        return num * factorial(num - 1);
    }
}

factorial(5)

// num * factorial(num - 1);
// 5 * 4!
// 5 * 4 * 3!
// 5 * 4 * 3 * 2!
// 5 * 4 * 3 * 2 * 1
// = 120
