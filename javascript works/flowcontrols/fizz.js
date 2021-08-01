// HW

// var num=15;
// if(num%3==0){
//     console.log("fizz");
// }
// else if(num%5==0){
//     console.log("buzz");
// }
// else if(num%15==0){
//     console.log("fizzbuzz");

// }
    



// to print fizzbuzz another method

// var num=15;
// var res="";
// if(num%3==0)
// {
//     res+="fizz"
// }
// if(num%5==0)
// {
//     res+="buzz"
// }
// console.log(res);

// to print fizzbuzz using ternary

var num=15;
// var res="";
var data=num%15==0?"fizzbuzz":num%3==0?"fizz":num%5==0?"buzz"  :"";
console.log(data);