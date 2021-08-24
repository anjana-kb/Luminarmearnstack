//method overriding
class Parent{
    phone(){
        console.log("samsung galaxy s7");
    }
}
class Child extends Parent{
    phone(){
        console.log("iphone");
    }
}
var child=new Child
child.phone();
//calling parent class method inside  child class

class Parent{
    phone(){
        console.log("samsung galaxy s7");
    }
}
class Child extends Parent{
    phone(){
        super.phone()
        console.log("iphone");
    }
}
var child=new Child
child.phone();