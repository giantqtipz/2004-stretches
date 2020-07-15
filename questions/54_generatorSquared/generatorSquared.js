// Create a generator that squares its input until max limit
// Approved documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// Pass the specs provided

//write your function here

const sqauredGen = (inputOne, inputTwo) => {
    typeof inputOne !== 'number' || typeof inputTwo !== 'number' ? Error() : null;
    
    let total = 0;

    for(i=inputOne;i<=inputTwo;i++){
        total = inputOne * inputOne; 
    }

    return total;

}


module.exports = { sqauredGen };
