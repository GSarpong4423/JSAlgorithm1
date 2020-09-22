 function titleCase(str) {
    var words = str.toLowerCase().split(' ');
    //  var lastLetter = letters[letters.length - 1].toUpperCase();
     
        for (var i = 0; i < words.length; i++) {
             var letters = words[i]; 
             letters.length ;
             console.log(letters.length);
         }
          return words.join(" ");
      }
    console.log(titleCase("I'm a little tea pot"));
  

//MY CODE
// function titleCase(str) {
//     var words = str.toLowerCase().split(" ");

//       for (var i = 0; i < words.length; i++) {
//          var letters = words[i].split(); 
//          var lastLetter = letters[letters.length - 1].toUpperCase();
//           letters[0] = letters[0].toLowerCase();
//             words[i] = letters[0] + lastLetter ;
           
//         }
//         return words.join(" ");
//     }
    
// console.log(titleCase("I'm a little tea pot"));


//CLASS EXAMPLE
let sentence = "The rain in Spain falls mainly on the plain";
let lowerCaseSentence = sentence.toLowerCase();
let arraySentence = lowerCaseSentence.split(" ");
let newSentence = "";
for (let i = 0; i < arraySentence.length; i++) {
    let lastLetter = arraySentence[i][arraySentence[i].length-1].toUpperCase();
    let beginningLetters = arraySentence[i].substring(0, arraySentence[i].length-1);
    let finalWord = beginningLetters+lastLetter;
    newSentence += finalWord + " ";
}
   console.log(newSentence);

