// map = to effcet all elements

var arr1=[1,2,3,4,5,6]

function square(num){
    return num**2;
}
console.log(arr1.map(square));

//minimise using arrow fn

var arr1=[1,2,3,4,5,6]

var square=(num)=>num**2;
console.log(arr1.map(square));

// again minimising

var arr1=[1,2,3,4,5,6]

// var square=(num)=>num**2;
console.log(arr1.map((num)=>num**2));




// normal way
// var arr1=[1,2,3,4,5,6]
// for(i=1;i<arr1.length;i++){
//       arr1[i]=arr1[i]**2;
// }
// console.log(arr1);