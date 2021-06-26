function replace(array, currentIndex) {
    if (currentIndex < array.length) {
        if (array[currentIndex] < 0) {
            array[currentIndex] = 0;
        }
  
        replace(array, currentIndex + 1);
    }
  
    return array;
}

let res = replace([2, -3, 4, -1, -7, 8], 0);
console.log(res)