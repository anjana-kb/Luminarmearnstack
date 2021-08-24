var num=123;
var sum=0;

while(num>0){              
   let digit=num%10;                  //digit=3
    sum+=digit;                       //sum=0+3=3
    num=Math.floor(num/10);            //num=12
}                            
console.log(sum);                      //digit=12%10=2
                                        //sum=3+2=5
                                        //num=math.floor(12/10)=1

                                         //digit=1%10=1
                                         //sum=5+1=6
                                         //num=math.floor(1/10)=0

                                        // while conditon false while(0>0)