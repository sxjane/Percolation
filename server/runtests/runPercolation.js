const UF = require("./../utilities/weightedQuickUnionUF");
module.exports = (n)=>{
    var squareRows = parseInt(n,10);
    var lengthOfMatrix = squareRows * squareRows;
    var matrix = (new Array(lengthOfMatrix)).fill(0);
    for(let i = 0; i < lengthOfMatrix; i++){
        if(randomOpen()){
            matrix[i] = 1;
        }
    }
    console.log("matrix", matrix);

    var uf = new UF(lengthOfMatrix+2);
    var virtualTop = uf.array[uf.array.length-2];
    var virtualBottom = uf.array[uf.array.length-1];

    //first line 
    for(let i = 0; i < squareRows; i++){
        if(matrix[i]){
            uf.union(i, virtualTop);
            let leftN = i - 1;
            let rightN = i + 1;
            let belowN = i + squareRows;
            if(leftN >=0 && matrix[leftN] && !uf.connected(leftN, i)){
                uf.union(leftN, i);
            }
            if(rightN <= squareRows && matrix[rightN] && !uf.connected(rightN, i)){
                uf.union(rightN, i);
            }
            if(matrix[belowN] && !uf.connected(belowN, i)){
                uf.union(belowN, i);
            }
        }
    }
    //middle line
    for(let i = squareRows; i < squareRows * (squareRows -1); i++){
        if(matrix[i]){
            let leftN = i - 1;
            let rightN = i + 1;
            let aboveN = i - squareRows;
            let belowN = i + squareRows;
            if(leftN % squareRows == 0 && matrix[leftN] && !uf.connected(leftN, i)){
                uf.union(leftN, i);
            }
            if((rightN + 1) % squareRows == 0 && matrix[rightN] && !uf.connected(rightN, i)){
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
    for(let i = squareRows * (squareRows - 1); i < lengthOfMatrix; i++){
        if(matrix[i]){
            uf.union(i, virtualBottom);
            let leftN = i - 1;
            let rightN = i + 1;
            let aboveN = i - squareRows;
            if(leftN >=  squareRows * (squareRows - 1) && matrix[leftN] && !uf.connected(leftN, i)){
                uf.union(leftN, i);
            }
            if(rightN <= squareRows*squareRows && matrix[rightN] && !uf.connected(rightN, i)){
                uf.union(rightN, i);
            }
            if(matrix[aboveN] && !uf.connected(aboveN, i)){
                uf.union(aboveN, i);
            }
        }
    }
    var ifTrue = uf.connected(virtualTop, virtualBottom);
    return {matrix, ifTrue};
};

function randomOpen(){
    var random = Math.random();
    if(random < 0.6){
        return 0;
    }else{
        return 1;
    }
}
