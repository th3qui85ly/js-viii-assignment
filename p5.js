// returns the string in lowercase
function toLow(name) {
  var n = "";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  for(var i=0; i<name.length; i++) {
    for(var j=0; j<26; j++) {
      if(name[i]==upper[j]) {
        n+=lower[j];
      }
    }
  }
  return n;
}

var arr = ["MAS","AI","SC","HOO","L"]; // can take any values in uppercase
var res = [];
for(var i=0; i<arr.length; i++) {
  res[i]=toLow(arr[i]);
}
console.log(res);
