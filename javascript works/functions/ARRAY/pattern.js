// arr=[2,4,6] to convert to this array([10,8,6])

var arr=[2,4,6];
var total=0;
for(let num of arr){
    total+=num;
}
for (let num of arr){
    console.log(total-num);
}
