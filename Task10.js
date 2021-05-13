function commonchar(str1,str2){
    var chararray=[];
    if (str1.length <= str2.length){    //check for the shorter string
        for (var i=0;i<str1.length;i++){  
            if (str2.includes(str1[i]) && chararray.includes(str1[i])==false){  //check if letters from short string found in longer string and remove duplicates
                chararray.push(str1[i]);
            }
        }
    } else{
        for (var i=0;i<str2.length;i++){
        if (str1.includes(str2[i]) && chararray.includes(str2[i])==false){  ////check if letters from short string found in longer string and remove duplicates
            chararray.push(str2[i]);
        }
    }
    
    }
    return chararray;
}
console.log(commonchar("characters","letters"));