// find how much time element 'x' and 'o' entered string.
// if x.length equal o.length return true, els false

function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    console.log(x);
  return (x && x.length) === (o && o.length);
}

console.log(XO('"xxOo"')); // "xo", "xmm", "xooX"