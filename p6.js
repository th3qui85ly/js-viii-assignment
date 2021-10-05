var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
// returns the value in lowercase
function toLow(n) {
  for(var i=0; i<26; i++) {
      if(n==upper[i]) {
        return lower[i];
      }
  } return n;
}
// returns the value in uppercase
function toUp(n) {
  for(var i=0; i<26; i++) {
      if(n==lower[i]) {
        return upper[i];
      }
  } return n;
}

var test = "sHIVANSH"; // any string can be given
var result = "";
for(var i=0; i<test.length; i++) {
  if(test[i]==toLow(test[i])) {
    result+=toUp(test[i]);
  } else {
    result+=toLow(test[i]);
  }
}

console.log(result);
