var arr=[2,3,4,6,7];
var sum=10;
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==sum){
            console.log(arr[i],arr[j]);
                    break;
        }
    }
}

// for(let i of arr){
//     for (let j of arr){ instead of forloop



// lower and upper only for sorted array

var arr=[2,3,4];
var low=0,upp=arr.length-1,sum=7;

while(low<upp){
    let total=arr[low]+arr[upp];
     if(total==sum){
         console.log(arr[low],arr[upp]);
         break;
     }
     else if(total>sum){
         upp--;
     }
     else{
         low++;
     }
}
