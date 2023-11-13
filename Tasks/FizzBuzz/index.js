function fizzbuzz(n){
    let array = []
    for(let i = 1; i < n+1; i++) {
        console.log(i + " -> " + (i % 5 === 0 && i % 3 === 0))
        if(i % 5 === 0 && i % 3 === 0) {
            array.push("FizzBuzz")
        }
        else if(i % 3 === 0) {
            array.push("Fizz")
        }
        else if(i % 5 === 0) {
            array.push("Buzz")
        }
        else {
            array.push(i)
        }
    }
    return array
}
console.log(fizzbuzz(30))