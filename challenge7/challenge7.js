// first occurance of a number in an array

function firstOccuranceOfaNumber(arr, num, index) {
    if(arr.length === index) {
        return -1
    }
    if(arr[index] === num) {
        return index
    }
    return firstOccuranceOfaNumber(arr, num, index + 1)
}

let res = firstOccuranceOfaNumber([5 , 4, 1, 3, 2, 3, 1], 1, 0)
console.log(res);