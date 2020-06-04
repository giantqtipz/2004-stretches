/*
Digital root is the recursive sum of all the digits in a number.
ex.
16  -->  1 + 6 = 7
55555 --> 5 + 5 + 5 + 5 + 5 = 25 --> 2 + 5 --> 7 
*/

//YOUR CODE GOES HERE
class digitalRoot {
    root(num){
        let result = 0;    
        const split = num.toString().split('');
        
        if(split.length > 1){
            for(let i=0;i<split.length;i++){
                result = result + (split[i]*1);
            }           
            return this.root(result);
        }

        // using reduce
        // while(split.length > 1){
        //     const sum = split.reduce((a,b) => {return a = a + parseInt(b)},0)
        //     return this.root(sum);
        // }

        return num;
    }   
}

module.exports = { digitalRoot };
