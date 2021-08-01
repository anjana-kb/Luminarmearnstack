// to take digits

// var num=123;
// while(num!=0){
//     let digit=num%10;
//     console.log(digit);
//     num=Math.floor(num/10);
// }

// to find the cube sum
var num=123;sum=0;
while(num!=0){
    let digit=num%10;
    console.log(digit);
    sum+=(digit**3);
    num=Math.floor(num/10);
}
console.log(sum);