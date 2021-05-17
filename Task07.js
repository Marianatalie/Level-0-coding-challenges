function celsiusToFarenheit(tempValue){
    var farenheitValue = (tempValue * (9 / 5)) + 32;
    return farenheitValue;
}

function farenheitToCelsius(tempValue){
    var celsiusValue = (tempValue - 32) * (5 / 9);
    return celsiusValue;
}

console.log(celsiusToFarenheit(0));
console.log(farenheitToCelsius(41));