//YOUR CODE HERE

class Box {
    constructor(color, capacity){
        this.color = color,
        this.capacity = capacity,
        this.contents = [];
    }

    pack(color, capacity){
        if(this.contents.length === this.capacity){ throw new Error('capacity reached'); }
        this.contents.push(new Box(color, capacity));
    }



}
    


module.exports = { Box };
