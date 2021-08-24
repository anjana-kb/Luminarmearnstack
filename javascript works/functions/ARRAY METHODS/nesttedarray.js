var employees=[
    [1000,"ram",2,25000,"developer"],
    [1001,"ravi",1,22000,"developer"],
    [1002,"raju",3,27000,"qa"],
    [1003,"nikil",1,22000,"developer"],
]
//print employee names
console.log(employees.map(employee=>employee[1]));
//print designations
console.log(employees.map(employee=>employee[4]));
// print deails of employee whodse designation is developer
console.log(employees.filter(employee=>employee[4]=="developer"));
//details....salry greater than 23000
console.log(employees.filter(employee=>employee[3]>23000));
//print all employee whos esalry greater than 23000 and designation dveloper
console.log(employees.filter(employee=>employee[3]>23000 & employee[4]=="developer"));
//   or name only
console.log(employees.filter(employee=>employee[3]>23000 & employee[4]=="developer").map(employee=>employee[1]));


