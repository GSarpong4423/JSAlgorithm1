function findLongestWordLength(str) {
    var words = str.split(' ');
    var maxLength = 0;
  
    for (var i = 0; i < words.length; i++) {   //words.length is the length of words in the sentence (9 words)
      if (words[i].length > maxLength) {       //words[i].length is the length of each word 3,5,5,3,6,4,3,4,3
        maxLength = words[i].length;
      }
    }
    console.log(maxLength);
   //return maxLength;
  }
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("May the force be with you");
findLongestWordLength("Google do a barrel roll");
findLongestWordLength("What is the average airspeed velocity of an unladen swallow");
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");