//low=8 upp=28
// 1**2=1 no print
//2**2=4 no print
//3**2=9 print(bcz it is between 8 & 28)
//4**2=16 print
//5**2=25 print
//6**2=36 no print

var low=8,upper=28,n=10,m,i=1;
while(i<=n){
    m=i**2;
    if(low<m & m<upper){
        console.log(i);
    }
     i++;
}

