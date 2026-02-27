function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    let arrHalfRight;
    let arrHalfLeft;

    if (arr.length % 2 === 0) {
        arrHalfLeft = arr.splice(0, (arr.length / 2));
        arrHalfRight = [...arr];
    }

    else {
        arrHalfLeft = arr.splice(0, ((arr.length + 1) / 2));
        arrHalfRight = [...arr];
    }

    let sortedArr = [];
    const resultLeft = mergeSort(arrHalfLeft);
    const resultRight = mergeSort(arrHalfRight);
    
    let targetSortedArrLength = resultLeft.length + resultRight.length;
    for (let i = 0; sortedArr.length < targetSortedArrLength; i++) {
        if (resultLeft[0] < resultRight[0]) {
            let removedValue = resultLeft.splice(0, 1);
            sortedArr.push(removedValue[0]);
        }
             
        else if (resultRight[0] < resultLeft[0]) {
            let removedValue = resultRight.splice(0, 1);
            sortedArr.push(removedValue[0]);
        }
            
        else if (!resultLeft.length) sortedArr = [...sortedArr, ...resultRight];
        else if (!resultRight.length) sortedArr = [...sortedArr, ...resultLeft];
    }


    return sortedArr;
}

console.log(mergeSort([3, 2, 1, 4, 5])); // logs [1, 2, 3, 4, 5]

// What is merge sort?
    // Recurses through an array of unsorted data until it reaches
    // its smallest sub-set, a single item. An array with a single
    // item is considered sorted. Merge sort then merges the single
    // items back together in sorted order.

// Examples
    // mergeSort([]) -> []
    // mergeSort([73]) -> [73]
    // mergeSort([1, 2, 3, 4]) -> [1, 2, 3, 4]
    // mergeSort([3, 8, 6, 0, 2]) -> [0, 2, 3, 6, 8]

// Merge sort pseudo code
    // If only one number
        // Quit
    // Else
        // Sort left half of numbers
        // Sort right half of numbers
        // Merge sorted halves