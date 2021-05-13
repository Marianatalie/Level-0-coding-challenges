function maximum(numbers){
    maxNum=0;
    for (var i=0;i<=arguments.length;i++){
        if(arguments[i]>maxNum){
            maxNum=arguments[i];
        }
    }
    return maxNum;
}
console.log(maximum(21,77,89,32,100));