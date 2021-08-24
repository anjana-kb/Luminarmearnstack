var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10],
]
// to check wether is complan there?  //find will return the first occurence only
console.log(products.find((item)=>item[1]=="complan"));
//filter returns every occurence
console.log(products.filter((item)=>item[1]=="complan"));
