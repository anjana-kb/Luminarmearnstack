// to find largest element in an array

// var array = [3 , 6, 2, 56, 32, 5, 9, 32];
// var large= 0;

// for (i=0; i<=large;i++){
//     if (array[i]>large) {
//         var large=array[i];
//     }
// }
// console.log(large);

// to find gcd

var num1=16,num2=48,gcd=0;
for(i=1;i<=16;i++){
    if(num1%i==0 & num2%i==0){
        gcd=i;
    }

}
console.log(gcd);

// using function

 function gcdOfTwo(num1,num2){
     let gcd=0;
     for(i=1;i<=num1 & i<=num2;i++){
        if(num1%i==0 & num2%i==0){
            gcd=i;
        }
    }
    return gcd;
}
console.log(gcdOfTwo(16,48));




