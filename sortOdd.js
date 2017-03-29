//You have an array of numbers.
//Your task is to sort ascending odd numbers but even numbers must be on their places.
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
// Example
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
// Test.assertSimilar(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// Test.assertSimilar(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
// Test.assertSimilar(sortArray([]),[])

function sortArray(array) {
    var res = [];
    var f_idx, max_val = 0;
    
    for (var i=0; i < array.length; i++){
        if (array[i] % 2 === 1) {
                if (!f_idx ) { f_idx = i; max_val = array[i]; }
                if (array[i] < res[f_idx]) {
                    res.splice(f_idx, 0 , array[i]);  // insert new min value
                    res.splice(res.indexOf(max_val), 1); // remove max value with new index after previos insert
                    res[i] = max_val; // set max_val to current min value idx 

                    //swap done.
                }
                // else if (array[i] > max_val) { max_val = array[i]; }
                
                else { res.push(array[i]); }
                
                console.log(`cur max val: ${max_val}, cur el: ${array[i]}, cur f_idx: ${f_idx}`);
        }
        else { res.push(array[i]); }
    }
    return console.log(res);
}

sortArray([5, 3, 2, 8, 1, 4]);
sortArray([5, 3, 1, 8, 0]);
sortArray([2, 22, 1, 0, 4, 11, 37, 5]);
sortArray([]);