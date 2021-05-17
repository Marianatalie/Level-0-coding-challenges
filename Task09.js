function printVowels(word){
    vowelArr=[];
    word=word.toLowerCase();                               
    for (let i=0;i < word.length;i++){
        switch(word[i]){                                      
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                if (vowelArr.includes(word[i]) == false){ 
                    vowelArr.push(word[i]);
                    break;
                }
        }

    }
    vowelArr=vowelArr.toString()
    console.log(vowelArr);
}

printVowels("Umuzi");