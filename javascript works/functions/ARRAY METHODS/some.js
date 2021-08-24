var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10],
]
//to check any prdct can purchase under100
console.log(products.some(item=>item[2]<100));

//forEach
products.forEach(item=>console.log(item[1]));

products.forEach(item=>console.log(item));

//sorting
products.sort((item1,item2)=>item1[2]-item2[2]).forEach(item=>console.log(item));

