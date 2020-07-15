// Create a generator that squares its input until max limit
// Approved documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// Pass the specs provided

//write your function here

const sqauredGen = (inputOne, inputTwo) => {
    typeof inputOne !== 'number' || typeof inputTwo !== 'number' ? Error() : null;
    
    let total = 0;

    if(inputOne > inputTwo){
        return;
    }

    inputOne++
    total = inputOne + inputOne;

    const next = () => {
        inputOne++;
        total = inputOne + inputOne;
        return total;
    }

    return total;
}

// solution

// function* sqauredGen(num, max){
//     while(num<max){
//         num++
//         yield num*num
//     }
//     return undefined;
// }

module.exports = { sqauredGen };
