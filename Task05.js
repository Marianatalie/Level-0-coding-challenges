function trigArea(len1,len2,len3){
    var sPerimeter = (len1 + len2 + len3) / 2;
    var area = Math.sqrt( sPerimeter * (sPerimeter - len1) * (sPerimeter - len2) * (sPerimeter - len3)); //Heron's formula
    return "Area is " + area;
}

console.log(trigArea(3,4,5));