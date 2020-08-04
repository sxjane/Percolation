const {QuickFindUF} = require("./../utilities/findUnion");
const publicFilePath = require("./../../share/routes").PUBLIC_TEXTS_PATH;
const readline = require("readline");
const fs = require("fs");
const path = require("path");

const readFilename = "uf.txt";
const readFilePath = path.join(publicFilePath, readFilename);

module.exports = async () =>{
    var uf = await processLineByLine();
    for(var item of uf.array){
        console.log(item);
    }
};

async function processLineByLine(){
    const rl = readline.createInterface({input:fs.createReadStream(readFilePath), crlfDelay:Infinity});

    var lineNumber = -1;
    var uf;
    for await (const input of rl){
        lineNumber++;
        var trimInput = input.trim();
        if(trimInput){
            var lineInput = trimInput.split(/\s+/);
            if(lineNumber === 0 && lineInput.length === 1) {
                uf = new QuickFindUF(lineInput[0]);
            }else if(lineNumber !== 0 && lineInput.length === 2){
                var p = lineInput[0];
                var q = lineInput[1];
                if(!uf.connected(p, q)){
                    uf.union(p, q);
                    console.log(`p is ${p} and q is ${q}`);
                }
            }else {
                console.log("The input has errors: " + input);
            }
        }
    }
    return uf;
}

