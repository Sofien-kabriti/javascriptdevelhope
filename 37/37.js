class BankAccount {
  constructor(initNum) {
    this.initNum = initNum;
  }

  deposit(deposit) {
    this.initNum += deposit;
  }

  withdraw(withdrawImport) {
    this.initNum -= withdraw;
  }

  view() {
    console.log(this.initNum);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
