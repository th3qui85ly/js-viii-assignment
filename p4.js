// returns the sum of the array elements
function arrSum(arr) {
  var sum = 0;
  for(var i=0; i<arr.length; i++){
    sum+=arr[i];
  }
  return sum;
}

var arr = [1,2,3,4,5]; // any value of array
if(arr.length!=0) {
  console.log(arrSum(arr)/arr.length);
} else {
  console.log(0);
}

