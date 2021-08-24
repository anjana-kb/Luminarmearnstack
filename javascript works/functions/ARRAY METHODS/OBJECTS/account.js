var datas=[
    {acno:1000,ac_type:"savings",balance:5000,transactions:[
        {to:1001,amount:500,note:"food"},
        {to:1003,amount:600,note:"travel"},
        {to:1001,amount:700,note:"ball"}
    ]},

    {acno:1001,ac_type:"savings",balance:6000,transactions:[
        {to:1000,amount:550,note:"bill"},
        {to:1003,amount:900,note:"emi"},
        {to:1002,amount:650,note:"bill"}
    ]},


    {acno:1002,ac_type:"savings",balance:8000,transactions:[
        {to:1001,amount:600,note:"clothing"},
        {to:1000,amount:800,note:"travel"},
        {to:1000,amount:700,note:"cycle"}
    ]}

]

//chk for 1005 account
// console.log(datas.some((data)=>data["acno"]==1005))

//highest balance account
// console.log(datas.reduce((data1,data2)=>data1.balance>data2.balance?data1.acno:data2.acno));

//sort based on decending order of balance
// console.log(datas.sort((data1,data2)=>data2.balance-data1.balance));

//debit transactions of acno 1000
// datas.filter(data=>data.acno==1000).forEach(data=>console.log(data.transactions))

//credit transactions of acno 1000
datas.map(account=>account.transactions).forEach(transactions=>{
    transactions.forEach(trans=>{
       trans.to==1000?console.log(trans):"";
})
})

//credit transactions of acno 1000 using for loop
// var history=[]
// for(payments of datas){
//     for(payment of payments.transactions){
//         if(payment.to==1000){
//             history.push(payment)
//         }
//     }
// }
// console.log(history);



//payment history of 1000
// var payment_history=[]
// var credit_trans=datas.map(account=>account.transactions).forEach(transactions=>{
//     transactions.forEach(trans=>{
//        trans.to==1000?payment_history.push(trans):"";
// })
// })

// datas.filter(account=>account.acno==1000).map(account=>payment_history.push(account.transactions))
// console.log(payment_history);