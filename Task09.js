function printVowels(word){
    vowelArray=[];
    word=word.toLowerCase();                               //makes word lower case
    for (var i=0;i < word.length;i++){
        switch(word[i]){                                      //searches for vowels
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                if (vowelArray.includes(word[i]) == false){ //ensuring no duplicates
                    vowelArray.push(word[i]);
                    break;
                }
        }

    }
    console.log(vowelArray);
}

printVowels("Umuzi");