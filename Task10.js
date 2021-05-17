function commonChar(str1,str2){
    var charArr=[];
    if (str1.length <= str2.length){    
        for (let i=0;i<str1.length;i++){  
            if (str2.includes(str1[i]) && charArr.includes(str1[i])==false){  
                charArr.push(str1[i]);
            }
        }
    } else{
        for (let i=0;i<str2.length;i++){
        if (str1.includes(str2[i]) && charArr.includes(str2[i])==false){  
            charArr.push(str2[i]);
        }
    }
    }
    charArr=charArr.toString();
    console.log(charArr);
    
}
commonChar("characters","letters");