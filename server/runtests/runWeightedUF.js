const fs = require("fs");
const readline = require("readline");
const path = require("path");
const routes = require("./../../share/routes");
const WeightedUF = require("./../utilities/weightedQuickUnionUF");

module.exports = async ()=>{
    const filePath = path.join(routes.PUBLIC_TEXTS_PATH, "uf.txt");
    var results = await processLineByLine(filePath);
    return results;
};
async function processLineByLine(filePath){
    var rl = readline.createInterface({input:fs.createReadStream(filePath), crlfDelay:Infinity});
    var lineNumber = -1;
    var uf; 
    for await(const line of rl){
        lineNumber++;
        var input = line.trim().split(/\s+/);
        if(lineNumber === 0 && input.length === 1 ){
            uf = new WeightedUF(input[0]);
        }else if(input.length === 2){
            var p = input[0];
            var q = input[1];
            if(!uf.connected(p,q)){
                uf.union(p,q);
            }
        }
    }
    return uf;
}