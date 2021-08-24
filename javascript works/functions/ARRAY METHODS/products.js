var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10],
]

// print product names
console.log(products.map(prd=>prd[1]));

// print avaialable product name
console.log(products.filter(prd=>prd[3]>0).map(prd=>prd[1]));


// print out of stock product details
console.log(products.filter(prd=>prd[3]==0));




// list all products whose price > 250
console.log(products.filter(prd=>prd[2]>250));



// low cost product  //reduce
console.log(products.reduce((prd1,prd2)=>prd1[2]<prd2[2]?prd1:prd2));


// is there any item available under 200
console.log(products.filter(prd=>prd[2]<200).map(prd=>prd[1]));


//high cost product  
console.log(products.reduce((prd1,prd2)=>prd1[2]>prd2[2]?prd1:prd2));

//highest stock product
console.log(products.reduce((prd1,prd2)=>prd1[3]>prd2[3]?prd1:prd2));