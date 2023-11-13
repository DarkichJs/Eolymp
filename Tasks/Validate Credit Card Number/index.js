function validate(n){
    const numberStr = n.toString();
    let numbers_higher_nine = ""
    let sum = 0;
    for(let i = 0; i < numberStr.length; i += 2) {

        if(parseInt(numberStr[i])*2 > 9) {
            numbers_higher_nine += (parseInt(numberStr[i])*2 - 9) + numberStr[i+1]
        } else {
            numbers_higher_nine += parseInt(numberStr[i])*2 + numberStr[i+1]
        }
    }

    for (let i = 0; i < numbers_higher_nine.length; i++) {
        sum += parseInt(numbers_higher_nine[i]); 
    }
    if(sum % 10 === 0) {
        return true;
    }else {
        return false;
    }
}