
var row=4,col=8;
for(row=1;row<=4;row++){
    let str="";
    if(row==4|col+row==5|col-row==3){
       str+="*";
       console.log(str);
    }
    else{
        console.log(" ");
    }
    

}