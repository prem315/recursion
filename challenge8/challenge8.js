function reverseArr(arr) {
    if(arr.length === 0) {
        return []
    }
    if(arr.length === 1) {
        return arr
    }

    return [arr[arr.length - 1]].concat(reverseArr(arr.slice(0, arr.length - 1)));
}

let result = reverseArr([1, 4, 2, 3, 6])
console.log(result)