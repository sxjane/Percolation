class QuickFindUF{
    #array;
    constructor(n){
        this.#array = new Array(n);
        for(var i = 0; i < n; i++){
            this.#array[i] = i;
        }
    }
    union(p, q){
        for(var i=0; i < this.#array.length; i++){
            if(this.#array[i] === this.#array[p]){
                this.#array[i] = this.#array[q];
            }
        }

    }
    connected(p, q){
        return this.#array[p] === this.#array[q];   
    }
    get array(){
        return this.#array;
    }
    //find(p){}
    //count(){}
}

module.exports = QuickFindUF;