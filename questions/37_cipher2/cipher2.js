const decypher = (arg) => {
  //YOUR CODE HERE
  // let result = [];
  const split = arg.split(' ');

  for(i=0;i<split.length;i++){
    let splitAgain = split[i].split('');
    parseInt(splitAgain[i]);
    const filterNums = splitAgain.filter((num) => {return typeof num === 'number'});
    console.log(filterNums);
    // let secondLetter = splitAgain[1];
    // let lastLetter = splitAgain[splitAgain.length-1];
    
    // splitAgain[0] = splitAgain[0].charCodeAt(splitAgain[0]);
    // splitAgain[1] = lastLetter;
    // splitAgain[splitAgain.length-1] = secondLetter;
    // result.push(splitAgain.join(''));
  }

  // return result.join(' ');

};
module.exports = { decypher };
