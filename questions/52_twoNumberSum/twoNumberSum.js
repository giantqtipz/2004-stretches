// Write a function that takes an array and a target sum
// This function should return an array of the target's sum pair or null if none found

//ie:: twoNumberSum([3, -2, 7, 29, 12, -5, 8, 10], 3) => [-5, 8]

//***Your solution should NOT include nested loops of any type***

const twoNumberSum = (arr, target) => {
  //write code here
  const result = [];
  const num = 1;

  const recurse = (arg) => {
    for(i=0;i<arg.length;i++){
      if(arg[i] + arg[num] !== target){
        num++;
        return recurse()
      }
      if(arg[i] + arg[num] === target){
        result.push(arg[i], arg[i+1])
      }
    }
  }
};

module.exports = { twoNumberSum };
