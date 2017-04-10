class bankAccount{
  constructor(name, accountNumber, pin, bankName){
    this.name = name;
    this.accountNumber = accountNumber;
    this._password = pin;
    this.bankName = bankName;
    this._balance = 0;
  }
  withdraw(pin, amount){
    if(amount > this._balance){
      return "Insufficient Funds";
    }
    else if(pin !== this._password){
      return "Incorrect Pin";
    }
    else{
      this._balance -= amount;
      return "Please Take your cash!";
    }
  }
  deposit(amount, accountNumber){
    if(accountNumber !== this.accountNumber){
    return "Unidentified Details Supplied";
    }
    else if(amount > 0){
      this._balance += amount;
      return "Deposit successful, your new balance is: "+ this._balance;
    }
  }
    getBalance(pin){
      if(pin !== this._password){
        return "Invalid pin Supplied";
      }
      else {
        return "Your balance is: "+ this._balance;
      
    }
  }
}

class studentAccount extends bankAccount{
  constructor(name, accountNumber, pin, bankName, type){
    super(name, accountNumber, pin, bankName);
  }
  deposit(amount, accountNumber){
    if(amount > 30000){
      return "Deposit limit exceeded";
    }
    else if(accountNumber !== this.accountNumber){
    return "Unidentified Details Supplied";
    }
    else if(amount > 0){
      this._balance += amount;
      return "Deposit successful, your new balance is: "+ this._balance;
    }
  }
  withdraw(pin, amount){
    if(amount > 10000){
      return "Withdrawal limit exceeded";
    }
    if(amount > this._balance){
      return "Insufficient Funds";
    }
    else if(pin !== this._password){
      return "Incorrect Pin";
    }
    else{
      this._balance -= amount;
      return "Please Take your cash!";
    }
  }
}
var clinton = new studentAccount("Clinton Fidelis", 23455677, 1234, "GTB", "student");
clinton.getBalance(1234);