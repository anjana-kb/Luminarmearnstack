// finding largest among three numbers

var num1=10,num2=14,num3=18;
var res=num1>num2 & num1>num3?"num 1 is large":num2>num1 & num2>num3? "num2 largest":"num3 largest";
console.log(res);

// second largest MY WAY



var num1=15,num2=18,num3=13;
if((num1>num2 & num2>num3) | (num3>num2 & num2>num1)){
    console.log("num2 second large");
}
else if((num2>num1 & num1>num3) | (num3>num1 & num1>num2)){
    console.log("num1 second large");
}
else{
    console.log("num3 second largest");
}