function moveZeros(arr) {
    let nonZeroElements = arr.filter(el => el !== 0);
    let zeroCount = arr.length - nonZeroElements.length;
    let zeroArray = new Array(zeroCount).fill(0);
    return nonZeroElements.concat(zeroArray);
  }