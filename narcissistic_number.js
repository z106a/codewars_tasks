// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.
//
//     For example, take 153 (3 digits):
//
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):
//
// 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634


function narcis(val) {
    var str_v = val.toString();
    var len = str_v.length;
    var sum = 0;
    for(var i =0; i<len; i++) {
        sum += Math.pow(parseInt(str_v.charAt(i)), len);
    }
    return sum === val ? true :  false;
}

console.log(narcis(153));


//clever

function narcissistic( value ) {
  return ('' + value).split('').reduce(function(p, c){
    return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}