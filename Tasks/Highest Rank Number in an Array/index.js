function highestRank(arr){
    let friquency = {}
    let maxFreq = 0 
    let candidates = []

    arr.forEach(number => {
        friquency[number] = (friquency[number] || 0) + 1;
        maxFreq = Math.max(maxFreq, friquency[number])
    })
    for(let number in friquency) {
        if (friquency[number] === maxFreq) {
            candidates.push(Number(number))
        }
    }
    return Math.max(...candidates);
}   