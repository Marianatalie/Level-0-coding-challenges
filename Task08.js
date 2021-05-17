function timeConversion(minuteValue){
    var hours = Math.floor(minuteValue / 60);
    var minutes = minuteValue % 60;
    if (hours == 1){
        if (minutes == 1){
            return hours + " hour, " + minutes + " minute";
        }
        else {
            return hours + " hour, " + minutes + " minutes";
        }
    }
    else{
        if (minutes == 1){
            return hours + " hours, " + minutes + " minute";
        }
        else {
            return hours + " hours, " + minutes + " minutes";
        }
    }
}
console.log(timeConversion(122));
