class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;

  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('Insufficient funds');
    } else {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }

  withdraw(amount) {
    if (amount > this.getBalance()) {
      console.log('Withdrawal failed. Insufficient funds.');
    } else {
      super.withdraw(amount);
    }
  }
}


const checking = new CheckingAccount('1234', 1000, 'John Doe');
checking.deposit(500);
checking.withdraw(200);
console.log('Checking Account Balance:', checking.getBalance());

const savings = new SavingsAccount('5678', 1500, 'Jane Smith');
savings.deposit(300);
savings.withdraw(200);
savings.withdraw(2000);
console.log('Savings Account Balance:', savings.getBalance());
