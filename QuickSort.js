function quickSort(array,left, right){
    let pivot ;
    let partitionIndex;
    if(left<right){
        pivot=right;
        partitionIndex = partition(array,pivot,left,right);

        quickSort(array,left,partitionIndex-1);
        quickSort(array,partitionIndex+1,right);
    }
    return array;

}

function partition(array, pivot, left, right){
    let pivotValue = array[pivot];
    let partitionIndex = left;

    for(var i=left;i<right;i++){
        if(array[i]<pivotValue){
            swape(array, i , partitionIndex);
            partitionIndex++;
        }

    }
    swape(array, right , partitionIndex);
    return partitionIndex;
}

function swape(array, firstIndex, secondIndex){
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex]=temp;
}

const array = [45,7,8,9,34,5,45,34,67,89];

const answer = quickSort(array,0,array.length-1);

console.log(answer);