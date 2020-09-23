//I am using the while loop method

function factorialize(num) {
    for(var i = 1; num > 0; num --){
        i *= num;
    }
    //console.log (i);
    return i;
  }
  
factorialize(5);
factorialize(10);
factorialize(20);
factorialize(0);