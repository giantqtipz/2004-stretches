//YOUR CODE HERE

class Box {
    constructor(color, capacity){
        this.color = color,
        this.capacity = capacity,
        this.contents = [];
    }

    pack(color, capacity){
        let currentCapacity = 0;
        if(currentCapacity >= this.capacity){ throw new Error('capacity reached'); }
         else {
             this.contents.push(new Box(color, capacity));
        currentCapacity++;
         }
    }



}
    


module.exports = { Box };
