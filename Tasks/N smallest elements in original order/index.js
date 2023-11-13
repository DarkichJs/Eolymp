function firstNSmallest(array, n){
    if (n === 0) return [];
    if (n > array.length) n = array.length;

    // Find the n-th smallest value
    const sortedArray = [...array].sort((a, b) => a - b);
    const nthSmallestValue = sortedArray[n - 1];

    // Count how many times the nth smallest value occurs in the array
    const nthValueCount = sortedArray.slice(0, n).filter(x => x === nthSmallestValue).length;

    // Build the result array
    let result = [];
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < nthSmallestValue || (array[i] === nthSmallestValue && count < nthValueCount)) {
            result.push(array[i]);
            if (array[i] === nthSmallestValue) count++;
        }
    }

    return result;
}
console.log(firstNSmallest([1,2,3,1,2],3))