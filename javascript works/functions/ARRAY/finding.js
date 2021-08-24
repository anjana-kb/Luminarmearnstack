// to find an element in an array
// var arr=[10,12,13,14,15];
// var element=19;flag=0;
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]==element){
//         flag+=1;
//         break;
        
//     }
    
// }
// console.log(flag==0?"not found":"found");

// or
var arr=[10,12,13,14,15];
var element=13;flag=0;
for(let num of arr){
    if (num==element){
        flag++;
        break;
    }

}
console.log(flag==0?"not found":"found");

