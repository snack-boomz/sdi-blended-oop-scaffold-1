# JavaScript Object Oriented Programming Workshop

## Project Instructions

* In this application you will create the following classes :
  1. BankAccount
  1. CheckingAccount
  1. SavingsAccount
  1. Member
* Implement the following instructions to ensure that each class is formatted properly

### BankAccount
* `balance` should be a private property (Read more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
* `balance` should only be accessible via a getter named `getBalance` and a setter named `setbalance` (Read more about [setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) and [getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
* The `credit()` method should add the given amount of money into the account
* The `debit()` method should take out the given amount of money from the account
* The `checkBalance()` method should return the current balance of the account in a readable string
* Anytime a transaction occurs, the amount credited or debited should be stored in a private property called `transactions`
* There should be a static method of the `BankAccount` class that returns the private property `transactions` of the account passed in when called

### CheckingAccount
* Should be a subclass of BankingAccount
* If you attempt to overdraft your `CheckingAccount` you should receive a message telling you that you have insufficient funds to perform that action
* If the balance of a `CheckingAccount` ever falls below $50 you should receive a $40 penalty fee

### SavingsAccount
* Should be a subclass of BankingAccount
* Should be able to link a `CheckingAccount` as a private property
* Should allow you to transfer money from your `SavingsAccount` to your `CheckingAccount`
* Should have a maximum number of debit transactions (10) associated with each `SavingsAccount`
* If the maximum number of debit transactions is passed you should receive a $50 penalty fee

### Member
* Should have one public field containing the member's name
* Any instantiation of a `BankAccount` or its subclasses should require a member to instantiate
* A `Member`'s accounts should be private

## Polymorphism

You will create two functions that utilize polymorphism :
1. `distributeEvenly()`
1. `distributeToSavings()`

### `distributeEvenly()`
* Should take an array of accounts and an amount to distribute as arguments
* Should distribute the amount passed evenly amongst the balances of the accounts
### `distributeToSavings()`
* Takes the same arguments as `distributeEvenly()`
* Should only add funds to instances of `SavingsAccounts` and no others

## Stretch goals
* Implement a `CreditCard` class that develops interest. The balance of the `CreditCard` can be paid off using either `CheckingAccounts` or `SavingsAccounts`. In the cases of late payments a $25 penalty fee is applied to the balance of the `CreditCard`
* Develop a test suite for your code to properly test all reasonable use cases