class bank{
    accountCreate(acno,ac_type,balance){
        this.acno=acno;
        this.ac_type=ac_type;
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
        console.log(`your account number ${this.acno} hasbeen credited with amount ${amount} aval bal ${this.balance}`);
    }
    withdrwal(amount){
        if(this.balance>amount){
            this.balance-=amount;
        }
        else{
            console.log("insufficient balance transaction failed with error code");
        }
    }
    balanceEnq(){
        console.log(`your aval balance is ${this.balance}`);
    }
}
var obj=new bank;
obj.accountCreate(1000,"savings",5000);
obj.deposit(20000);
