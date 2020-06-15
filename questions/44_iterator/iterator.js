// Create a class called Iterator whose instances takes an array
// and method next() interates through it til complete

class Iterator {
  //write code here
  constructor(arr){
    if(Array.isArray(arr)){
      this.arr = arr;
    } else {
      throw new Error();
    }
    this.index = 0;
  }

  next(){
    this.index++;
    if(this.index === this.arr.length+1){
      return {done: true, value: undefined}
    }
    return ({done: false, value: this.arr[this.index-1]})
  }


}

module.exports = { Iterator };
