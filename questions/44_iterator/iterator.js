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
  }

  next(){
    let done = false;
    for(let i=0;i<this.arr.length;i++){
      if(i === this.arr.length){ 
        return {done: done, value: undefined}
      }
        return {done: done, value: this.arr[i]}
      }
  }

}

module.exports = { Iterator };
