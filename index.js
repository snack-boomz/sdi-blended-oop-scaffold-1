class Member {
  //#accounts - A `Member`'s accounts should be private
  constructor(name) {
    this.name = name; 
    //Should have one public field containing the member's name
    //Any instantiation of a `BankAccount` or its subclasses should require a member to instantiate
  };
};

let Spencer = new Member('Spencer')
class BankAccount /*superClass*/ {
  #balance = 0; //+ getBalance + setBalance - 
  #transactions = [];
  constructor(member) { 
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
    this.#balance += newAmount;
    this.#transactions.push (`$${newAmount} credited `); // `${this.#balance} + ${newAmount} = ${this.#balance += newAmount}`
  };
  debit(withdraw) {
    this.#balance -= withdraw;
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



let myBankAccount = new BankAccount('spencer')
myBankAccount.credit(100.34);
myBankAccount.debit(34.00);
// console.log(BankAccount.viewTransactions(myBankAccount));
// console.log(myBankAccount.checkBalance());


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

let newCheckingAccount = new CheckingAccount("myCheckingAccount");
newCheckingAccount.setBalance = 1000;

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
      this.#checkingAccount.setBalance = amount + this.#checkingAccount.getBalance;
      this.setBalance = this.getBalance - amount;
      console.log(`New savings account balance is $${this.getBalance}.`);
      console.log(`New checking account balance is $${this.#checkingAccount.getBalance}.`);
    }
  };
  

let newSavingsAccount = new SavingsAccount('dude');  
newSavingsAccount.setBalance = 1000;
console.log(newSavingsAccount.getBalance);
newSavingsAccount.linkChecking(newCheckingAccount);
newSavingsAccount.transferToChecking(500);

//polymorphism for below functions
const distributeEvenly = () => {
//* Should take an array of accounts and an amount to distribute as arguments
//* Should distribute the amount passed evenly amongst the balances of the accounts
};
const distributeToSavings = () => {
//* Takes the same arguments as `distributeEvenly()`
//* Should only add funds to instances of `SavingsAccounts` and no others
};


/*## Stretch goals (from README)
* Implement some concept of time so that interest can be applied to `SavingsAccounts`
* Implement a `CreditCard` class that develops interest. The balance of the `CreditCard` can be paid off using either `CheckingAccounts` or `SavingsAccounts`. In the cases of late payments a $25 penalty fee is applied to the balance of the `CreditCard`
* Create multiple banks that can open `BankAccounts` and its subclasses
* Add in functionality that gives a user readable spending analysis on a monthly basis
*/

// JS

// Number
// string
// array
// object
// collection

// C

// int
// char
// *
// short
// short short
// long
// long long
// long
// bool
// unsigned int
// signed int
//

/*
arr = [1, 2, 3, 4, 5, 6, 7]

  for item in arr: 
    print(item)


class Simple_class():

  def __init__(self):
    self.attribute1 = 0
    self.attribute2 = 2
    self.attribute3 = 3

  def start(self):
    print("starting class!");
  

instance = Simple_class()
instance.start()



arr = [1, 2]

reversedArr = arr.reverse()
print(reversedArr)

*/

/*
  
  #include <stdio.h>
  char * displayArrayInReverse(int array[], int arrayLength) {

  static char buffer[50];
  char * bufferPtr = buffer;

  for (int i = (arrayLength - 1); i >= 0; i--) {
    bufferPtr += sprintf(bufferPtr, "%d ", array[i]);
  }
  return buffer;
}


int main() {

  int array[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};

  int arrayLength = sizeof array / sizeof array[0];

  char buffer[50];
  char * bufferPtr = buffer;

  for (int i = 0; i < arrayLength; i++) {
    bufferPtr += sprintf(bufferPtr, "%d ", array[i]);
  }

  printf("The reverse order of the array looks like so: %s.\n The original order was %s.\n", displayArrayInReverse(array, arrayLength), buffer);

}


*/