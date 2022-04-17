let array = [1,4,6,2,7,8,0];
let temp=0;

function bubbleSort(array){
    for(var i=0;i<array.length;i++){
        for(j=0;j<array.length;j++){
            if(array[i]<array[j]){
               temp = array[i];
               array[i]=array[j];
               array[j]=temp; 
            }
        }
    }
    return array

}

function bubbleSort(array){
    for(var i=0;i<array.length;i++){
        for(j=i;j<array.length;j++){
            if(array[i]<array[j]){
               temp = array[i];
               array[i]=array[j];
               array[j]=temp; 
            }
        }
    }
    return array

}

function bubbleSort3(array){
    for(var i=0;i<array.length;i++){
        for(j=0;j<array.length;j++){
            if(array[j+1]<array[j]){
               temp = array[j];
               array[i+1]=array[j];
               array[j]=temp; 
            }
        }
    }
    return array

}