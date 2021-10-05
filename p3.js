// returns bool value if number is odd or not
function isOdd(num) {
  if(num%2==1) {
    return true;
  } else {
    return false;
  }
}

var num = 12; // given limit, any number can be given
for(var i=0; i<=num; i++) {
    if(isOdd(i)) {
      console.log(i);
    }
}
