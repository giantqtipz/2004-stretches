//Your excavating a newly found archaeological site and need to track your depth
//Write a function to recursively "dig" through this object installing a depth key along the way
//return the object with it's depth indicated

const recordDepth = (obj) => {
  //write code here
  if(typeof obj !== 'object') {throw 'must be an object'}

  let number = 0;
  let newObj = {};
  const recurse = (arg) => {
    for(let key in arg){
      if(typeof arg[key] === 'object'){
        number++;
        newObj = arg[key]
        arg.depth = number;
        return recordDepth(arg[key]);
      } else {
        return arg;
      }
    }
  }
  recurse(obj);
};

module.exports = { recordDepth };
