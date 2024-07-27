//Q2:
// Write a function that returns the sum of two numbers.
// Write a function that returns the sum of all numbers regardless of # of params.
// exam:For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.
// hints:Arithmetic Operators
// Rest Operators
// forEach()

function sum(param1,param2){
    return param1 + param2;
}
console.log('The sum of two numbers:'+ sum(1,3))

function totalSum(...param1){
    let total = 0;
    param1.forEach(perElem=>{
        total = total+perElem;
    })
    return total;

}
console.log("The sum of all numbers:"+totalSum(1,3,4));
