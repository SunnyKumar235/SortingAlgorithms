let array = [1, 4, 6, 2, 7, 8, 0];
let temp = 0;

function selectioSort(array) {

    let length = array.length;
    for (var i = 0; i < length; i++) {
       let min = i;
       let temp = array[i];
        for (j = i+1; j < length; j++) {
            if (array[j] < array[min]) {
             
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
  return array;
}

console.log(selectioSort(array)); 