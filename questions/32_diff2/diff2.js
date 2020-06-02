// diffTwo should return all pairs of integers from a given array of integers that have a difference of 2.
// the returning array of pairs should be sorted in ascending order of values.
//diffTwo([1, 2, 3, 4])=>[[1, 3], [2, 4]]

const diffTwo = (arg) => {
    if (!Array.isArray(arg)){ throw new Error(); } 

    let sortArray = arg.sort((a,b)=> a-b);
    let result = [];

    for(let i=0;i<sortArray.length;i++){
        for(let j=1;j<sortArray.length;j++){
            if(arg[j] - arg[i] === 2){
                result.push([arg[i], arg[j]])
            }
        }
    }
    return result;
};

module.exports = { diffTwo };
