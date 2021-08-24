class BookLibrary{
    books={
        "randamoozham":{book_name:"randamoozham" ,price:470,author:"mt vasudevannair",avl_copies:100,sold_copies:100},
        "aadujeevitham":{book_name:"aadujeevitham" ,price:500,author:"benyamin",avl_copies:150,sold_copies:145},
        "rainrising":{book_name:"rainrising" ,price:500,author:"nirupama",avl_copies:200,sold_copies:140},
        "halfgirlfriend":{book_name:"halfgirlfriend" ,price:550,author:"chethan bagath",avl_copies:150,sold_copies:140}
    }
    findbook(book_name){
        if(book_name in this.books){
            console.log(this.books[book_name]);
        }
        else{
            console.log("book not avilable");
            
        }

    }
    orderBySold(){

    }
}
var obj=new BookLibrary
obj.findbook("randam")