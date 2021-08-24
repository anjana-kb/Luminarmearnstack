class Person{
    setPerson(age,name){
        this.age=age;
        this.name=name;
    }
    getAge(){
        return this.age;
    }
    getName(){
        return this.name;
    }
}
var obj1=new Person;
var obj2=new Person;
obj1.setPerson(25,"anjana");
console.log(obj1.getAge());
console.log(obj1.getName());
