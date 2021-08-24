// find out missing element in this array

var arr=[1,2,3,4,5,6,7,8,10,11,12];
for(let i=1;i<arr.length-1;i++){
sum=(arr[i]-arr[i-1]);
if(sum!==1){
    console.log(arr[i]-1);
}
 }

//  discussed in class
// equation to find sum of n numbers  n*n+1/2
 var arr=[1,2,3,4,5,6,7,8,10,11,12];
 var sum=12*13/2;
 console.log(sum);
 var total=0;
 for(let num of arr){
     total+=num;
 }
 console.log(sum-total);
