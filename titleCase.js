function titleCase(str) {
    var word = str.toLowerCase().split(' ');
      for (var i = 0; i < word.length; i++) {
         var letters = word[i].split(""); 
         letters[0] = letters[0].toUpperCase();
            word[i] = letters.join("");
           
        }
        return word.join(" ");
    }
    
console.log(titleCase("I'm a little tea pot"));

// const sentence = "JaCk AnD jILL rAn Up a hILL.";
// let lowerCaseSentence = sentence.toLowerCase();
// let sentenceArray = lowerCaseSentence.split(" ");
// let finalSentence = " ";

// for ( var i = 0; i < sentenceArray.length; i++) {
//     var firstLetter = sentenceArray[i][0].toUpperCase();
//     var restOfWord = sentenceArray[i].substring(1);
//     var comeTogether = firstLetter + restOfWord;
//     finalSentence += comeTogether + " " ;
// }
// console.log(finalSentence);