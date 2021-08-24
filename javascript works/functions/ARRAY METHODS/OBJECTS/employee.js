var employee={
    eid:1001,
    e_name:"ram",
    desighn:"developer",
    salary:5000,
}
console.log(employee["e_name"]);
//or
console.log(employee.e_name);
//chk for exp is present  if not add exp:1 else current exp+1
"exp" in employee ?employee.exp+=1: employee.exp=1;
console.log(employee);

//one by one printing
for(let key in employee){
    console.log(key);
    console.log(employee[key]);
}
//adding new
employee["gender"]="male";
console.log(employee);