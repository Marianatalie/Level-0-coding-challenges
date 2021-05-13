function commonChar(str1,str2){
    var charArray=[];
    if (str1.length <= str2.length){    //check for the shorter string
        for (var i=0;i<str1.length;i++){  
            if (str2.includes(str1[i]) && charArray.includes(str1[i])==false){  //check if letters from short string found in longer string and remove duplicates
                charArray.push(str1[i]);
            }
        }
    } else{
        for (var i=0;i<str2.length;i++){
        if (str1.includes(str2[i]) && charArray.includes(str2[i])==false){  ////check if letters from short string found in longer string and remove duplicates
            charArray.push(str2[i]);
        }
    }
    
    }
    return charArray;
}
console.log(commonChar("characters","letters"));