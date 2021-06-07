// find sum of k numbers
function sum(num) {
    if(num === 1) {
        return 1
    } else {
        return num + sum(num - 1)
    }
}

let res = sum(5)
console.log(res)

// recursion
// 5 + sum(5-1)
// 5 + 4 + sum(4-1)
// 5 + 4 + 3 + sum(3-1)
// 5 + 4 + 3 + 2 + sum(2-1)
// 5 + 4 + 3 + 2 + 1 -> break base condition
// 15