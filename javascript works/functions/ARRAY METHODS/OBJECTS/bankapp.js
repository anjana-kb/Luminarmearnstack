class bank{
    session={}
    account_details={
        1000:{acno:1000,balance:2000,username:"userone",password:"userone"},
        1001:{acno:1001,balance:3000,username:"usertwo",password:"usertwo"},
        1002:{acno:1002,balance:2002,username:"userthree",password:"userthree"},
        1003:{acno:1003,balance:20000,username:"userfour",password:"userfour"}
    }

 accountCreate(acno,balance,username,password){
       if(acno in this.account_details){
           console.log("account already exists");
       }
       else{
           this.account_details[acno]={acno:acno,balance:balance,username:username,password:password} 
           console.log("account created");
           console.log(this.account_details);
              }
            }

            authenticate(account_number,username,password){
            if(account_number in this.account_details){
                    if(this.account_details[account_number].username==username){

                                 if(this.account_details[account_number].password==password){
                                    console.log("login success");
                                    this.session["user"]=account_number;
                                   }
                                else{
                                            console.log("incorrect password");
                                    }  
                    }
                    else{
                            console.log("incorrect username");
                    }
            }

                
         else{
                console.log("account number not exist");
            }

 }
                fundTransfer(from_accno,to_accno,amount){
                    if(from_accno==this.session["user"]){
                        if(to_accno in this.account_details){
                            if(this.account_details[from_accno].balance>amount){
                                this.account_details[to_accno].balance+=amount;
                                this.account_details[from_accno].balance-=amount
                                console.log(`your account ${from_accno} is debited with amount ${amount} aval bal ${this.account_details[from_accno].balance}`);

                            }
                            else{
                                console.log("insufficient balance");
                            }
                        }
                        else{
                            console.log("invalid account number");
                        }

                    }
                    else{
                        console.log("invalid session login required");
                    }
               }
        //  balanceEnq(login_accno){                   MY WAY
        //      if(login_accno==this.session["user"]){
        //          console.log(`your account number ${login_accno} balance is ${this.account_details[login_accno].balance}`);
        //      }
        //      else{
        //          console.log("login required");
        //      }
        //  }
        balanceEnq(){
            if("user" in this.session){
                console.log(`your account balance is ${this.account_details[this.session["user"]].balance}`);
            }
        }

}
var obj=new bank;
obj.accountCreate(1004,6000,"userfive","userfive")
obj.authenticate(1000,"userone","userone")
obj.fundTransfer(1000,1001,500)


// var obj1=new bank;
// obj1.authenticate(1001,"usertwo","usertwo")
// obj1.fundTransfer(1001,1000,500)
obj.balanceEnq(1000)
















// var account_details={
//     1000:{acno:1000,balance:2000,username:"userone",password:"userone"},
//     1001:{acno:1001,balance:3000,username:"usertwo",password:"usertwo"},
//     1002:{acno:1002,balance:2002,username:"userthree",password:"userthree"},
//     1003:{acno:1003,balance:20000,username:"userfour",password:"userfour"}
// }
//chk for 1000 is present or not
// console.log(1000 in account_details);
//print user name & password of 1001
// console.log(account_details[1001].username);
// console.log(account_details[1001].password);
//balance of 1003
// console.log(account_details[1003].balance);

