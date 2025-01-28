function foo(a, b) {
  //Check if both arguments are numbers
if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; //Return NaN if either argument is not a number
  }
  return a + b; //Add them
}
console.log(foo(1, "2")); //Output: NaN
console.log(foo(1,2)); //Output: 3