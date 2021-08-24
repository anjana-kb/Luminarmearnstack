function factorial(num){
    let fact=1;
    for(i=1;i<=num;i++){
           fact*=i;
    }
    return fact;
}
console.log(factorial(3));

// recursion

function factorial(num){
    if (num==0||num==1){
        return 1;
    }
    return num*factorial(num-1)
}
console.log(factorial(4));

