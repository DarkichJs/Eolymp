function toCamelCase(str){
    let word = ""
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if(letter == "_") {
            word += str[i+1].toUpperCase() 
            i += 1
            continue
        }
        if(letter == "-"){
            word += str[i+1].toUpperCase() 
            i += 1
            continue
        }
        word += letter
      }
    return word
}
console.log(toCamelCase("the_stealth_warrior"))