class Member {
  #accounts = []; //`Member`'s accounts should be private
  constructor(name) {
    this.name = name; 
    //Should have one public field containing the member's name
  };
  get getAccounts(){
    return this.#accounts;
  }
  set addAccount(newAccount){
    this.#accounts.push(newAccount);
  }

    //Any instantiation of a `BankAccount` or its subclasses should require a member to instantiate
  
};


class BankAccount /*superClass*/ {
  #balance = 0; //+ getBalance + setBalance - 
  #transactions = [];
  constructor(member) {
    if (member instanceof Member === false) {
       throw new Error('you messed up')
    }
    this.member = member;

    //The `checkBalance()` method should return the current balance of the account in a readable string
    //Anytime a transaction occurs, the amount credited or debited should be stored in a private property called `transactions`
    //There should be a static method of the `BankAccount` class that returns the private property `transactions` of the account passed in when called
  };
  get getBalance() {
    return this.#balance;
  }
  set setBalance(balance) {
    this.#balance = balance;
  }
  credit(newAmount) {  
    // this.#balance += newAmount;
    this.setBalance = newAmount + this.getBalance;
    this.#transactions.push (`$${newAmount} credited `); // `${this.#balance} + ${newAmount} = ${this.#balance += newAmount}`
  };
  debit(withdraw) {
    // this.#balance -= withdraw;
    this.setBalance = this.getBalance - withdraw;
    this.#transactions.push (`$${withdraw} debited `);
  };
  checkBalance() {
    return `The current balance of your account is $${this.#balance}`;
  };
  static viewTransactions (account) {
    return account.#transactions; 
  }
};

//Note: static ViewTransactions may not be accessing instanced account's #transactions.  It MAY be accessing the original BankAccount class's transactions.



class CheckingAccount extends BankAccount {
  constructor(member) {
    super(member);
  };
  debit(withdraw) {
    if (withdraw > this.getBalance) {
    return "insufficient funds to perform that action";  
    } else {
      super.debit(withdraw);
    } 
    if (this.getBalance < 50) {
      super.debit(40);
      console.log( `$40 penalty fee incurred for failure to maintain minimum balance. New Balance: ${this.getBalance}`)
    }
    
  }

}


// console.log(newCheckingAccount.checkBalance());

class SavingsAccount extends BankAccount {
  #checkingAccount;
    constructor(member) {
      super(member);
    };
    //Should allow you to transfer money from your `SavingsAccount` to your `CheckingAccount`
    //Should have a maximum number of debit transactions (10) associated with each `SavingsAccount
    //If the maximum number of debit transactions is passed you should receive a $50 penalty fee
    linkChecking(account) {
      this.#checkingAccount = account;
    }
    transferToChecking(amount) {
      console.log(BankAccount.viewTransactions(this).length);
      if ( BankAccount.viewTransactions(this).length > 10) {
        this.setBalance = this.getBalance - 50;
        console.log(`You have exceeded 10 transactions. Noob. You have been charged a transaction fee of $50, new savings balance is $${this.getBalance}`)
      } 
      this.#checkingAccount.credit(amount)
      this.debit(amount)
      console.log(`New savings account balance is $${this.getBalance}.`);
      console.log(`New checking account balance is $${this.#checkingAccount.getBalance}.`);
      
    }
  };
// let spencer = new Member('Spencer');
// let spencerCheck1 = new CheckingAccount(spencer);

// let spencerSavings1 = new SavingsAccount(spencer);

// let spencerCheck3 = new CheckingAccount(spencer);

// let spencerSavings2 = new SavingsAccount(spencer);

// let spencerCheck5 = new CheckingAccount(spencer);

// spencer.addAccount = spencerCheck1;
// spencer.addAccount = spencerSavings1;
// spencer.addAccount = spencerCheck3;
// spencer.addAccount = spencerSavings2;
// spencer.addAccount = spencerCheck5;

// console.log(spencer.getAccounts);

// spencer {
//   #accounts = [ checking, savings, checking]
// }

//polymorphism for below functions
const distributeEvenly = (arrayOfAccounts, amountToDistribute) => {
  let dividend = amountToDistribute / arrayOfAccounts.length;
//* Should take an array of accounts and an amount to distribute as arguments
  for (let i = 0; i < arrayOfAccounts.length; i++){
    let eachAccount = arrayOfAccounts[i];
    eachAccount.credit(dividend);
    console.log(eachAccount.getBalance);
  }
}
  // get length of array of accounts, divide amount by length of account array
  // for loop through array of accounts
  // add divided amount to balance of each account in array

  // distributeEvenly(spencer.getAccounts, 107609870);
  
/*
distributeEvenly(spencer.getAccounts, 400)


checking = $100
Savings = $100
distributeEvenly(100)
checking = $150
savings = $150
*/

//* Should distribute the amount passed evenly amongst the balances of the accounts

const distributeToSavings = (arrayOfAccounts, amountToDistribute) => {
  let arrayOfSavings = []
  for (let i = 0; i < arrayOfAccounts.length; i++){
   if ( arrayOfAccounts[i] instanceof SavingsAccount){
   arrayOfSavings.push(arrayOfAccounts[i])
  }
}
  let dividend = amountToDistribute / arrayOfSavings.length;
  //* Should take an array of accounts and an amount to distribute as arguments
    for (let i = 0; i < arrayOfSavings.length; i++){
      let eachAccount = arrayOfSavings[i];
      eachAccount.credit(dividend);
      console.log(eachAccount.getBalance);
    }
//* Takes the same arguments as `distributeEvenly()`
//* Should only add funds to instances of `SavingsAccounts` and no others
};

// distributeToSavings(spencer.getAccounts, 200);




/*## Stretch goals (from README)
* Implement some concept of time so that interest can be applied to `SavingsAccounts`
* Implement a `CreditCard` class that develops interest. The balance of the `CreditCard` can be paid off using either `CheckingAccounts` or `SavingsAccounts`. In the cases of late payments a $25 penalty fee is applied to the balance of the `CreditCard`
* Create multiple banks that can open `BankAccounts` and its subclasses
* Add in functionality that gives a user readable spending analysis on a monthly basis
*/

