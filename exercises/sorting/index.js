// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

//name-> worst case runtime -> difficulty
//bubble-> n^2  -> Easiest
//Selection->n^2 ->Easier
//Merge ->n*log(n) -> medium
function bubbleSort(arr) {
    //implement bubble sort
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<(arr.length-i -1);j++){
            if(arr[j] > arr[j+1]){
                const lesserTemp =arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = lesserTemp;
            } 
        }
    }
    //return sort
    return arr;
}

function selectionSort(arr) {

    //prove me wrong algorithm

    //assume the element at i is the least
    for(let i=0;i<arr.length;i++){
        let indexOfMin = i;
        
        for(let j=i+1;j<arr.length;j++){
            if (arr[j]<arr[indexOfMin]){
            
                indexOfMin = j;
            }
        }
        if (indexOfMin !==i){
            let temp = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}

function mergeSort(arr) {
    if(arr.length ===1){
        return arr;
    }

    const center = Math.floor(arr.length/2);
    const left = arr.slice(0,center);
    const right = arr.slice(center); 

    return merge(mergeSort(left),mergeSort(right));




}

function merge(left, right) {

    //create results array
    //while there are still elements in both array
        //if the first element the left half is less than first in right half
            //shift the element from left into a result arr
        //else 
            //shif tthe element from right into result
    //take everything from the array that still has stuff in it and put it in the results

    let results = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
            let newLeft = left.shift();
            results.push(newLeft);
        }else{
            let newRight = right.shift();
            results.push(newRight);
        }
    }

    return [...results, ...left, ...right];
    //this is like concatenating all of the results


}

module.exports = { bubbleSort, selectionSort, mergeSort,merge };
