

var low=3,upp=18;
for(let i=low;i<=upp;i++){
let flag=0;
  for(let j=2;j<i;j++){

            if(i%j==0){
              flag++;
              break; 
                  }       
  }
  console.log(flag==0?i:"");
}
