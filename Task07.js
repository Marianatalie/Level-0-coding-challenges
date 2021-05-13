function celsiusToFarenheit(tempValue){
    var farenheitValue = (tempValue * (9 / 5)) + 32;
    return farenheitValue + " degrees Farenheit";
}

function farenheitToCelsius(tempValue){
    var celsiusValue = (tempValue - 32) * (5 / 9);
    return celsiusValue + " degrees Celsius";
}

console.log(celsiusToFarenheit(0));
console.log(farenheitToCelsius(41));