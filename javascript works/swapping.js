// var num1=10;var num2=20;var temp;

// temp=num1;
// num1=num2;
// num2=temp;
// console.log("num1="+num1+"num2="+num2);

// or

var num1=10;var num2=20;
console.log(`values before swapping num1=${num1} num2=${num2}`);
num1=num1+num2;
num2=num1-num2;
num1=num1-num2;
console.log(`values after swapping num1=${num1} num2=${num2}`);