// count vowels in the string

function isVowel(char) {
    if(char === "a" || char === "e" || char === "t" || char === "o" || char === "u") {
        return 1
    } else {
        return 0
    }
}

function countVowelsRecursively(str, length) {
    // console.log(length);
    if(length === 1) {
        return isVowel(str[0])
    } 
    return countVowelsRecursively(str, length - 1) + isVowel(str[length - 1]);
    
}

let count = countVowelsRecursively("elephant", "elephant".length)
console.log(count)





