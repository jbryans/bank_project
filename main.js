//The class should have the following fields: accountnumber, owner, transactions
class BankAccount {
    accountNumber;
    owner;
    transactions;
    //The constructor should take in the following input: accountnumber, owner
    constructor(iAccountNum, iOwner){
    this.accountNumber = iAccountNum
    this.owner = iOwner
    this.transactions = []
    }
    //The class should have the following 3 methods balance(), deposit(amt), charge(amt,payee)
    balance(){
        let sum = 0 
        for(let i = 0; i < this.transactions.length; i++){
            sum += this.transactions[i].amount 
        }
        return sum
    }

    deposit(amt){
       if(amt>0){ 
        let depositTransaction = new Transaction(amt, this.owner)
        this.transactions.push(depositTransaction)
            } 
        }

    charge(amt,payee){
      
        let balance = this.balance()
        if(amt<=balance){
            let chargeTransaction = new Transaction(-amt, payee)
            this.transactions.push(chargeTransaction)
        } 
    }        


}
//Transaction class - This class represents a single transaction in a bank account.
class Transaction {

date;
amount;
payee;

constructor(iAmount, iPayee){
    this.amount = iAmount
    this.payee = iPayee
    this.date = new Date()
    }




}

let account1 = new BankAccount("1223355" , "John Doe")

console.log('owner' , account1.owner)

account1.deposit(10)

console.log('array', account1.transactions)



console.log('balance', account1.balance())

account1.charge(5)

console.log('balance after charge', account1.balance())

