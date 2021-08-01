
var num=123;sum=0;
while(num!=0){
let digit=num%10;
console.log(digit);
sum=(sum*10)+digit;
num=Math.floor(num/10);
}
console.log(sum);

// another method

// var num=123;res="";
// while(num!=0){
// let digit=num%10;
// console.log(digit);
// res+=digit;
// num=Math.floor(num/10);
// }
// console.log(res);
