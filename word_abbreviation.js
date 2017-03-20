// The word i18n is a common abbreviation of internationalization the developer community use instead of typing the whole word and
//  trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.
// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater 
// into an abbreviation following the same rules.
// Notes:
// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") 
// will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, 
// then the last letter (eg. "elephant ride" => "e6t r2e").
// Example:
// abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"

function abbreviate(string) {
    // var re = /\W+/g
    var re = /\s*\b\s*/
    var new_str = "";
    var arr = string.split(re);

    for (var i=0; i< arr.length; i++) {
        new_str += arr[i].length >= 4 ? maskify(arr[i])  : arr[i];
        console.log(arr[i]);
        if ( arr[i+1]!== undefined && arr[i+1] !== ',' && arr[i+1] !== '-' && arr[i] !== '-' ) { new_str += ' '; }
    }
  
    console.log(new_str);

    function maskify(str) {
        return (str.slice(0,1) + str.slice(1, -1).length + str.slice(-1));
    }

    
}

//str = "elephant-rides are really fun!";
var str = "You need, need not want, a to complete this code-wars mission a";
abbreviate(str);

// BEST PRACTICE 
var find = /[a-z]{4,}/gi;
function replace(match) { return match[0] + (match.length - 2) + match[match.length - 1]; }

function abbreviate(string) {
  return string.replace(find, replace);
}