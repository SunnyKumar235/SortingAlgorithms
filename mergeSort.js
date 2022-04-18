function mergeSort(array){
if(array.length==1){
    return array;
}
const length = array.length;
const middle = Math.floor(length/2);
const left = array.slice(0,middle);
const right =  array.slice(middle);

return merge(
    mergeSort(left),
    mergeSort(right)
)
}

function merge(left, right){
    const result =[];
    let letfIndex =  0;
    let rightIndex = 0;
    while(letfIndex<left.length && rightIndex<right.length){
        if(left[letfIndex]<right[rightIndex]){
            result.push(left[letfIndex]);
            letfIndex++;
        }else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(letfIndex)).concat(right.slice(rightIndex));

}

const array=[2,5,2,99,56,46,23,67];

const answer = mergeSort(array);
console.log(answer);
