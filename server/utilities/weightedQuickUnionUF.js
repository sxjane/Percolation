class WeightedQuickUnionUF{
    #array;
    #treeHight;
    constructor(n){
        this.#array = new Array(n);
        this.#treeHight = new Array(n);
        for(var i = 0; i < n; i++){
            this.#array[i] = i;
            this.#treeHight[i] = 1;
        }
    }
    get array(){
        return this.#array;
    }
    root(p){
        while(this.#array[p] != p){
            this.#array[p] = this.#array[this.#array[p]];
            p = this.#array[p];
        }
        return parseInt(p,10);
    }
    connected(p, q){
        return this.root(p) === this.root(q);
    }
    union(p, q){
        var rootOfp = this.root(p);
        var rootOfq = this.root(q);
        var hightOfp = this.#treeHight[rootOfp];
        var hightOfq = this.#treeHight[rootOfq];

        if(hightOfp <= hightOfq){
            this.#array[rootOfp] = rootOfq;
            this.#treeHight[rootOfq] += hightOfp;
        }else{
            this.#array[rootOfq] = rootOfp;
            this.#treeHight[rootOfp] += hightOfq;
        }
    }
}

module.exports = WeightedQuickUnionUF;