
// function fib(num){
// var fibb=0;
//     for(i=1;i<=num;i++){
//         if(i>=fibb){
//         fibb=(fibb-1)+(fibb-2);
//         }


//     }
// return fibb;
// }
// console.log(fib(4));

function fibonacci(n){
    if (n==0 | n ==1){
        return n
    } 
    else{
        return fibonacci(n-1)+ fibonacci(n-2)
    }
}
console.log(fibonacci(4));