// to print
// 1
// 1
// 1
// 2
// 2
// 2
// 3
// 3
// 3


// for(let i=1;i<=3;i++){
//     for(let j=1;j<=3;j++){
//         console.log(i);
//     }
// }

// to print
// 111
// 222
// 333

for(let i=1;i<=3;i++){
    let str="";
    for(let j=1;j<=3;j++){
       str+=i;
    }
    console.log(str);
}
