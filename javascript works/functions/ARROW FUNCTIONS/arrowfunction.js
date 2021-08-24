var add=(num1,num2)=>(num1+num2);  //arrow fn
res=add(3,4);
console.log(res);

// //or if there is multiple lines

let add=(num1,num2)=>{
       let res=num1+num2;
       return res;
}
 //cube
let cube=num=>num**3;
 //sub
let sub=(num1,num2)=>(num1-num2);
console.log(sub(6,5));
 //mul
let mul=(num1,num2)=>(num1*num2);

// subtraction with out negative values

let smartsub=(num1,num2)=>num1<num2?num2-num1:num1-num2;
console.log(smartsub(10,20));



