function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
}
function oddNotPrime(n){
    let array = []
    for (let i = 1; i <= n; i++) {
        if(i % 2 !== 0) {
            if(!isPrime(i)) {
                array.push(i)
            }
            
        }
    }
    return array.length
}
console.log(oddNotPrime(10))