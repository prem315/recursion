// find square using recursion
function square(num) {
    if(num === 0) {
        return 0
    } else {
        return square(num-1) + (2 * num) - 1
    }
}

const res = square(5)
console.log(res)