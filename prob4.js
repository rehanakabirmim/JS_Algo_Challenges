
//Give a sequence of integer to an array, determine whether it is possible to obtain a strictly increasing sequence by removing not more than one element from the array.
//example:For sequence = [ 1, 3, 2, 1], the output should be almostincreasingSequence(sequence) = false;
//There is no one element in this array that can be removed in order to get a strictly increasing sequence.
//For sequence = [ 1, 2, 3], the output should be almostincreasingSequence(sequence) = true;


function secuence(inputArray){
    for(let i=1; i<inputArray.length;i++){
        if(inputArray[i]<inputArray[i-1]){
            return false
        }
    }
    return true
}

console.log(secuence([1,2,3]))
console.log(secuence([1,2,3,1]))