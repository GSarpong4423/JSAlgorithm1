function reverseString(str) {
    let splitString = str.split("");
    let reversedArray = splitString.reverse("");
    let joinArray = reversedArray.join("");

    return str ;
  }
  
  reverseString("hello");
  reverseString("howdy");
  reverseString("Greetings from Earth");