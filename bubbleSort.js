let array = [24, 98, 1, 2342, 12, 74928, 483, 123];

// make a helper function to swap i and j in the array //
function swap(array, i, j){
    var arr = array[i];
    array[i] = array[j];
    array[j] = arr;
}

function bubbleSort(array){
 // loop through array //       
    for (var i = 0; i < array.length; i++){
        for(var j = 1; j < array.length; j++){
            if(array[j - 1] > array[j]){
                swap(array, j - 1, j);
            }
        }
    }
    return array;
}

console.log(bubbleSort(array));