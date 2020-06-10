setTimeout(() => {console.log('sure whatever');},2000);
const encrypt = (arg) => {
  //YOUR CODE HERE
  let result = [];
  const split = arg.split(' '); // messy but works :D

  for(i=0;i<split.length;i++){
    let splitAgain = split[i].split('');
    let secondLetter = splitAgain[1];
    let lastLetter = splitAgain[splitAgain.length-1];
    
    splitAgain[0] = splitAgain[0].charCodeAt(splitAgain[0]);
    splitAgain[1] = lastLetter;
    splitAgain[splitAgain.length-1] = secondLetter;
    result.push(splitAgain.join(''));
  }

  return result.join(' ');
};

module.exports = { encrypt };
