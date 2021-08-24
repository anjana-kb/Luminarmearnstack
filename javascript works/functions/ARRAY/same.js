var arr1=[1,2,3,4,5];
var arr2=[4,3,5,1,2];

arr1.sort((no1,no2)=>no1-no2); //not subtracting (no1<no2?-1:1)//ascending order
console.log(arr1);
arr2.sort((no1,no2)=>no1-no2); //not subtracting (no1<no2?-1:1)
console.log(arr2);
var flag=0;
var limit=arr2.length
if(arr1.length!=arr2.length){
    console.log("arrays are not same");
}
else{
    for(i=0;i<=limit;i++){
        if(arr1[i]==arr2[i]){
            continue;
        }
        else{
          flag++;
          break;
        }
    }
    console.log(flag==0?"same":"not same");
}

