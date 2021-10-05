// returns the absolute value after difference
function numDiff(a, b) {
  return absDiff(a-b);
}

// returns the absolute value
function absDiff(n) {
  if(n>=0) {
    return n;
  } else {
    return n*-1;
  }
}

console.log(numDiff(12,988)); // any value can be passed here
console.log(numDiff(8,1286)); // any value can be passed here