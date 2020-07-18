const fold = (arr) => { // oops.. it takes two arguments... 
  //YOUR CODE HERE
  let result = [];

  const recurse = (arg) => {
    for(let i=0; i<arg.length;i++){
      if(arg[i]){
        result.push(arg[i] + arg[arg.length-1]);
        arg.shift();
        arg.pop();
        console.log(result);
        return recurse(arg);
      } else {
        return result;
      }
    }
  }

  return recurse(arr);
};

module.exports = fold;
