function sort(arr, length) {
	
	if (length <= 1) {
		return
    }
	
	sort(arr, length - 1)
	
	let lastElement = arr[length - 1] 
	let temp = length - 2 
	
	while (temp >= 0 && arr[temp] > lastElement) {
		arr[temp + 1] = arr[temp]
		temp = temp - 1
    }

	arr[temp + 1] = lastElement
}

sort([7, 6, 5, 4, 3, 2], [7, 6, 5, 4, 3, 2].length)