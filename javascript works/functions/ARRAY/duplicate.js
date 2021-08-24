// var arr1=[10,20,30,40];
// var arr2=[9,10,12,20],cnt=0;

// for(i=0;i<arr1.length;i++){
//     for(j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             console.log(arr1[i]);
            
            
//         }
//     }
// }



var arr1=[10,20,30,40];
var arr2=[9,10,12,20];

for(let num1 of arr1){
    for(let num2 of arr2){
        if(num1==num2){
            console.log(num1);
        }

    }
}