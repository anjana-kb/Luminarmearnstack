class Person{
    constructor(age,name){
        this.age=age;
        this.name=name;
        //initialising instance variable
    }
    printPerson(){
        console.log(this.age,this.name);
    }
}
var Person=new Person(22,"anjana")
Person.printPerson()
//no need to call constructor it is invoked at the tym of object creation
//constructor name is constructor