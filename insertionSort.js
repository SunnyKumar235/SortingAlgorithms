let array = [1, 4, 6, 2, 7, 8, 0];

function insertionSort(array){
    let length =array.length;
    let min=0;
    let temp=0;

    for(var i=1;i<length;i++){
        temp =array[i];
        j=i-1;
        while(j>=0 && array[j]>temp){
            array[j+1]=array[j];
            j--;
        }
        array[j+1]=temp;
    }
    return array;
}

console.log(insertionSort(array));
