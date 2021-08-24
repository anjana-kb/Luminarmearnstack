var employees=[
    [1000,"ram",2,25000,"developer"],
    [1001,"ravi",1,22000,"developer"],
    [1002,"raju",3,27000,"qa"],
    [1003,"nikil",1,22000,"developer"],
]

//print employee names
for(let employee of employees){
    console.log(employee[1]);
}

//print employees designation

for(let employee of employees){
    console.log(employee[4]);
}
//print emp names whose salary is greater than23000
for(let employee of employees){
    if(employee[3]>23000){
        console.log(employee[1]);
    }
}
//highest paid employee
var max=0;
for(let employee of employees){
           if(employee[3]>max){
               max=employee[3];
           }

    }
     console.log(max);
     //to print name of highest paid employee
for(let employee of employees){
    if(employee[3]==max){
        console.log(employee[1]);
    }
}



//lowest paid employee





//number of employees working as developer
var num=0;
for(let employee of employees){
           if(employee[4]=="developer"){
         num++;
           }

    }
     console.log(num);



//number of employees working as qa

var num=0;
for(let employee of employees){
           if(employee[4]=="qa"){
         num++;
           }

    }
     console.log(num);
