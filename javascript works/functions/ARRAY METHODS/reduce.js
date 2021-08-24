//reduce =to return one element


var arr=[10,11,12,13,14,15,16,17,19]
// sum of elements
console.log(arr.reduce((num1,num2)=>num1+num2));

//minimum
var min=arr.reduce((num1,num2)=>num1>num2?num2:num1);
console.log(min);
//maximum
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2);
console.log(max);