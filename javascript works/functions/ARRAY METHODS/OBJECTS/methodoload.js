class calculation{
    add(){
        console.log("insisde no arg method");
    }
    add(num1){
        console.log("insisde single arg method");
    }
    add(num1,num2){
        console.log("inside two arg method");
    }
}
var calc=new calculation
calc.add(10,20)
calc.add(10)
calc.add();