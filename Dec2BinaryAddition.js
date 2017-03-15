Dec2BinaryAddition

function addBinary(a,b){
  return (a+b).toString(2)
}

or

function addBinary(a,b){
  return ((a + b) >>> 0).toString(2);
}