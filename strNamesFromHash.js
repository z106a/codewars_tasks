//Given: an array containing hashes of names
//Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
//Example:
//list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'
//list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'
//list([ {name: 'Bart'} ])
// returns 'Bart'
//list([])
// returns ''

var names = [];

function list(names){
  new_str = names.map(function(val) {return val.name} ).join(', ');  
  return new_str.indexOf(',') > -1 ? new_str.substr(0, new_str.lastIndexOf(',')) + ' &' + new_str.substr(new_str.lastIndexOf(',')+1) : new_str;
}

list(names);

// best practice 
function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }