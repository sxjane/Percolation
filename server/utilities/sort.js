function swap(i, j, array){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
function isSorted(array, ascending){
    if(ascending){
        for(let i = 0; i < array.length-1; i++){
            if(array[i] > array[i+1]){
                return false;
            }
        }
        return true;
    }else{
        for(let i = 0; i <array.length-1; i++){
            if(array[i] < array[i+1]){
                return false;
            }
        }
        return true;
    }
}
function selectionSort(array, ascending){
    for(let unsortedFirstIndex = 0; unsortedFirstIndex < array.length; unsortedFirstIndex++){
        let pickIndex;
        if(ascending){
            pickIndex = findSmallest(unsortedFirstIndex,array);
        }else{
            pickIndex = findBiggest(unsortedFirstIndex, array);
        }
        swap(unsortedFirstIndex, pickIndex, array);
    }
}
function findSmallest(start, array){
    let minIndex = start;
    for(let i = start+1; i < array.length; i++){
        if(array[i] < array[minIndex]){
            minIndex = i;
        }
    }
    return minIndex;
}
function findBiggest(start, array){
    let maxIndex = start;
    for(let i = start+1; i< array.length; i++){
        if(array[i] > array[maxIndex]){
            maxIndex = i;
        }
    }
    return maxIndex;
}
function InsertionSort(array, ascending){
    for(let unsortedFirstIndex = 1; unsortedFirstIndex < array.length; unsortedFirstIndex++){
        for(let sortedIndex = unsortedFirstIndex-1; sortedIndex > -1; sortedIndex--){
            if(ascending){
                if(array[sortedIndex+1] < array[sortedIndex]){
                    swap(sortedIndex+1, sortedIndex, array);
                }else{
                    break;
                }
            }else{
                if(array[sortedIndex+1] > array[sortedIndex]){
                    swap(sortedIndex+1, sortedIndex, array);
                }else{
                    break;
                }
            }
        }
    }
}

function ShellSort(array, ascending){
    let h=1;
    while(h < array.length/3){
        h = 3*h + 1;
    }
    console.log("h is ", h);
    while(h > 0){
        for(let unsortedFirstIndex = 0; unsortedFirstIndex < array.length; unsortedFirstIndex++ ){
            for(let sortedIndex = unsortedFirstIndex - h; sortedIndex > -1; sortedIndex -= h){
                if(ascending){
                    if(array[sortedIndex + h] < array[sortedIndex]){
                        swap(sortedIndex + h, sortedIndex, array);
                    }else{
                        break;
                    }
                }else{
                    if(array[sortedIndex + h] > array[sortedIndex]){
                        swap(sortedIndex + h, sortedIndex, array);
                    }else{
                        break;
                    }
                }
            }
        }
        h = Math.floor(h/3);
        console.log("h is ", h);
    }
}

module.exports={selectionSort, isSorted, InsertionSort, ShellSort};
