function longestWord2 (str) {
    let letters = str.split(' ');
    let maximumWord = 0;

    for (var i = 0; i < letters.length; i ++){
        if (letters[i].length > maximumWord){
            maximumWord = letters[i].length;
            
        }

    }
    console.log (maximumWord);
}

longestWord2 ("Mary had a little lamb");