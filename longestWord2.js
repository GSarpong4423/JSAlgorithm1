function wordLength (str) {
    let eachWord = str.split(' ');
    let longestWord = 0;

    for (var i =0; i < eachWord.length; i++) {
        if (eachWord[i].length > longestWord){
            longestWord = eachWord[i].length;
        }
    }
console.log(longestWord);
}

wordLength ("I love my family and kids I wish we had a turquoise dog with feathered ears who sings labamba in the shower");