class ResizingStack{
    #top = -1;
    #size = 2;
    constructor(){
    }
    get size(){
        return this.#size;
    }
}

module.exports = ResizingStack;