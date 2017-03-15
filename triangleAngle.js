//In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).
//If all angles are less than 90°, this triangle is acute and function should return 1.
//If one angle is strictly 90°, this triangle is right and function should return 2.
//If one angle more than 90°, this triangle is obtuse and function should return 3.
//If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.
//Input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both).
//http://en.wikipedia.org/wiki/Law_of_cosines

//Example Tests:
//Test.assertEquals(triangleType(7,3,2), 0); // Not triangle
//Test.assertEquals(triangleType(2,4,6), 0); // Not triangle
//Test.assertEquals(triangleType(8,5,7), 1); // Acute
//Test.assertEquals(triangleType(3,4,5), 2); // Right
//Test.assertEquals(triangleType(7,12,8), 3); // Obtuse


function triangleType(a, b, c) {
  
  var args = Array.prototype.slice.call(arguments, 0);
  var res = [];

  res.push(getAngle(a, b, c));
  res.push(getAngle(b, c, a));
  res.push(getAngle(c, a, b));
  
  console.log(res);
  var right_count = 0;
  var acute_count = 0;
  var obtuse_count = 0;
  
  for (var i=0; i<=res.length; i++) {  
    if (res[i] === 90) {right_count++; }
    if (res[i] < 90) { acute_count++; }
    if (res[i] > 90) { obtuse_count++; }
    
    if (res[i] === 0) {console.log(0); return 0; }
  }
  
  if (right_count === 1) {console.log(2); return 2; }
  if (acute_count === 3) {console.log(1); return 1; }
  if (obtuse_count === 1) {console.log(3); return 3; }
  
  function getAngle(a, b, c, cb) {
    var temp = (a*a + b*b - c*c) / (2 * a * b);
    if(temp>=-1 && 0.999999 >=temp){
      return radToDeg(Math.acos(temp));
    }
    else if (1 >= temp){
      return radToDeg(Math.sqrt((c * c - (a - b) * (a - b)) / (a * b)));
    }
    else {
       return 0;
    }

  }

  function radToDeg(radians) {
    return Math.round(radians * 180 / Math.PI);
  }
  
}

triangleType(7, 12, 8);
