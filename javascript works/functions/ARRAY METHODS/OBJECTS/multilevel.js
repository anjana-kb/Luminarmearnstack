class Parent{
    m1(){
        console.log("inside parent m1()");
    }
}
class SubChild extends Parent{
    m2(){
        console.log("inside parent m2()");
    }
}
class Child extends SubChild{
    m3(){
        console.log("inside parent m3()");
    }
}
var child=new Child
child.m1();
child.m2();
child.m3();

var subchild=new SubChild
subchild.m1();
subchild.m2();

var parent=new Parent
parent.m1();