Maskify

//Maskify last 4 digit of str.
// orig 

function maskify(cc) {
  if (cc.length > 3) {
    return (Array(cc.length - 3).join('#')) + cc.slice(-4);
  } else {
    return cc;
  }
}

var str = '2345679'
//var str = '1';

console.log(maskify(str));
// _________________________________

// best 

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}