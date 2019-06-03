const UF = require("./../utilities/weightedQuickUnionUF");
module.exports = (n)=>{
    var dimension = parseInt(n,10);
    var lengthOfMatrix = dimension * dimension;
    var matrix = (new Array(lengthOfMatrix)).fill(0);
    for(let i = 0; i < lengthOfMatrix; i++){
        if(randomOpen()){
            matrix[i] = 1;
        }
    }

    var uf = new UF(lengthOfMatrix+2);
    var virtualTop = uf.array[uf.array.length-2];
    var virtualBottom = uf.array[uf.array.length-1];

    //first line 
    for(let i = 0; i < dimension; i++){
        if(matrix[i]){
            uf.union(i, virtualTop);
            let leftN = i - 1;
            let rightN = i + 1;
            let belowN = i + dimension;
            if(leftN >=0 && matrix[leftN] && !uf.connected(leftN, i)){
                uf.union(leftN, i);
            }
            if(rightN <= dimension && matrix[rightN] && !uf.connected(rightN, i)){
                uf.union(rightN, i);
            }
            if(matrix[belowN] && !uf.connected(belowN, i)){
                uf.union(belowN, i);
            }
        }
    }
    //middle line
    for(let i = dimension; i < dimension * (dimension -1); i++){
        if(matrix[i]){
            let leftN = i - 1;
            let rightN = i + 1;
            let aboveN = i - dimension;
            let belowN = i + dimension;
            if(leftN % dimension == 0 && matrix[leftN] && !uf.connected(leftN, i)){
                uf.union(leftN, i);
            }
            if((rightN + 1) % dimension == 0 && matrix[rightN] && !uf.connected(rightN, i)){
                uf.union(rightN, i);
            }
            if(matrix[aboveN] && !uf.connected(aboveN, i)){
                uf.union(aboveN, i);
            }
            if(matrix[belowN] && !uf.connected(belowN, i)){
                uf.connected(belowN, i);
            }
        }
    }
    //bottom line
    for(let i = dimension * (dimension - 1); i < lengthOfMatrix; i++){
        if(matrix[i]){
            uf.union(i, virtualBottom);
            let leftN = i - 1;
            let rightN = i + 1;
            let aboveN = i - dimension;
            if(leftN >=  dimension * (dimension - 1) && matrix[leftN] && !uf.connected(leftN, i)){
                uf.union(leftN, i);
            }
            if(rightN <= dimension*dimension && matrix[rightN] && !uf.connected(rightN, i)){
                uf.union(rightN, i);
            }
            if(matrix[aboveN] && !uf.connected(aboveN, i)){
                uf.union(aboveN, i);
            }
           
        }
    }
    console.log(matrix);
    console.log(uf.array);
    var percolation = console.log(uf.connected(virtualTop, virtualBottom));
    return {matrix, percolation};
};

function randomOpen(){
    var random = Math.random();
    if(random < 0.4){
        return 0;
    }else{
        return 1;
    }
}
