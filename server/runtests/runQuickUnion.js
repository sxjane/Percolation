const fs = require("fs");
const readline = require("readline");
const routes = require("./../../share/routes");
const path = require("path");
const {QuickUnionUF} = require("./../utilities/findUnion");

module.exports = async () =>{
    const filename = path.join(routes.PUBLIC_TEXTS_PATH, "uf.txt");
    const rl = readline.createInterface({input:fs.createReadStream(filename), crlfDelay:Infinity});
    var uf = await processLineByLine(rl);
    //console.log(uf.length);
};

async function processLineByLine(rl){
    var lineNumber = -1;
    var uf;
    for await (const line of rl){
        lineNumber++;
        var inputTrim = line.trim();
        if(!inputTrim){
            continue;
        }
        var inputNumber = inputTrim.split(/\s+/);
        if(lineNumber === 0 && inputNumber.length === 1){
            uf = new QuickUnionUF(inputNumber[0]);
            console.log(uf.array.length);
        }else if (lineNumber !== 0 && inputNumber.length === 2){
            var p = inputNumber[0];
            var q = inputNumber[1];
            if(!uf.connected(p,q)){
                uf.union(p, q);
            }
            for(var item of uf.array){
                console.log(item);
            }
            console.log("end");
        }else {
            console.log("The input has errors " + line);
        }
    }
    return uf;
}