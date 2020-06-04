/*
Digital root is the recursive sum of all the digits in a number.
ex.
16  -->  1 + 6 = 7
55555 --> 5 + 5 + 5 + 5 + 5 = 25 --> 2 + 5 --> 7 
*/

//YOUR CODE GOES HERE
class digitalRoot {
    constructor(){}

    root(num){
        let result = 0;    
        const split = num.toString().split('');
        
        if(split.length > 1){
            for(let i=0;i<split.length;i++){
                result = result + (split[i]*1);
            }           
            return this.root(result);
        }
        return num;
    }   

}
    
    





module.exports = { digitalRoot };
