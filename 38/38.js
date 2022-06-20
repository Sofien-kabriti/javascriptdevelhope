class BankAccount {
  balance = 0;

  constructor(initialAmount) {
    this.balance = initialAmount;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  view() {
    console.log(this.balance);
  }
}



class BankAccountVip extends BankAccount {
  
  constructor(initialAmount){
    super(initialAmount)  
    }
  deposit(balance){
    if (balance >= 1000){
      super.deposit(balance + ((balance / 100) * 3))
    }
    else {
      super.deposit(balance)
    }
  } 
  }

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.view();
bankAccountVip.deposit(500);
bankAccountVip.view();
bankAccountVip.deposit(1200);
bankAccountVip.view();
bankAccountVip.withdraw(800);
bankAccountVip.view();
bankAccountVip.deposit(3500);
bankAccountVip.view();
