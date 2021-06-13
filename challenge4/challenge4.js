// reverse the string recursively 

function reverseStr(str) {
    console.log(str);
    if(str === "") {
        return str
    } else {
        let newStr = str[str.length - 1]
        return newStr + reverseStr(str.substr(0, str.length - 1))
    }
}

const reverseString = reverseStr("prempatel")
console.log(reverseString)


