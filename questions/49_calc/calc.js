// - Write a chainable Calculator that can add, subtract,and multiply

class chainCalc {
  //write code here
  constructor(num){
    if(typeof num !== 'number') { throw Error() } 
    this.result = num;
  }
  
  add(arg){
    this.result = this.result + arg;
    return this; 
  }

  sub(arg){
    this.result = this.result - arg;
    return this; 
  }

  mul(arg){
    this.result = this.result * arg;
    return this; 
  }

}

module.exports = { chainCalc };
