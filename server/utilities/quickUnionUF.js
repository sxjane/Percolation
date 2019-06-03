class QuickUnionUF{
    #array;
    constructor(n){
        this.#array = new Array(n);
        for(var i = 0; i < n; i++) {
            this.#array[i] = i;
        }
    }
    get array(){
        return this.#array;
    }
    root(p){
        while(this.#array[p] != p){
            p = this.#array[p];
        }
        return p;
    }
    union(p, q){
        var rootP = this.root(p);
        var rootQ = this.root(q);
        this.array[rootP] = rootQ;
    }
    connected(p, q){
        return this.root(p) === this.root(q);
    }
}

module.exports = QuickUnionUF;