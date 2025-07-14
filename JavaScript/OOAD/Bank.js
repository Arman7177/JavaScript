class Account {
    #balance;
    constructor(accountNumber, accountHolder, balance = 0) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.#balance = balance;
    }

    deposit(amount) {
      if (amount <= 0) throw new Error("Գումարը պետք է լինի դրական");
      this.#balance += amount;
    }

    withdraw(amount) {
      if (this.#balance - amount < 0) throw new Error("Բավարար միջոցներ չկան");
      this.#balance -= amount;
    }

    getBalance() {
      return this.#balance;
    }
  }

  class Bank {
    constructor() {
      this.accounts = [];
    }

    addAccount(account) {
      this.accounts.push(account);
    }

    findAccount(number) {
      return this.accounts.find(acc => acc.accountNumber === number);
    }

    getTotalBalance() {
      return this.accounts.reduce((sum, acc) => sum + acc.getBalance(), 0);
    }
  }

  const bank = new Bank();

  function createAccount() {
    const number = document.getElementById("accNumber").value;
    const holder = document.getElementById("accHolder").value;
    const balance = parseFloat(document.getElementById("accBalance").value) || 0;
    if (!number || !holder) return show("Խնդրում ենք լրացնել բոլոր դաշտերը");

    const account = new Account(number, holder, balance);
    bank.addAccount(account);
    show(`Հաշիվը ստեղծվեց՝ ${holder}, №${number}`);
  }

  function deposit() {
    const accNum = document.getElementById("targetAccount").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const account = bank.findAccount(accNum);
    if (!account) return show("Հաշիվը չի գտնվել");
    try {
      account.deposit(amount);
      show(`Մուտքագրվեց ${amount} միավոր`);
    } catch (e) {
      show(e.message);
    }
  }
function withdraw() {
    const accNum = document.getElementById("targetAccount").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const account = bank.findAccount(accNum);
    if (!account) return show("Հաշիվը չի գտնվել");
    try {
      account.withdraw(amount);
      show(`Հանվեց ${amount} միավոր`);
    } catch (e) {
      show(e.message);
    }
  }

  function showBalance() {
    const accNum = document.getElementById("targetAccount").value;
    const account = bank.findAccount(accNum);
    if (!account) return show("Հաշիվը չի գտնվել");
    show(`Մնացորդ՝ ${account.getBalance()} միավոր`);
  }

  function showTotal() {
    const total = bank.getTotalBalance();
    document.getElementById("totalBalance").innerText = `Ընդհանուր բանկի գումարը՝ ${total} միավոր`;
  }

  function show(msg) {
    document.getElementById("result").innerText = msg;
  }