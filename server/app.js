const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
var morgan = require("morgan");
const path=require("path");
const routes = require("./../share/routes");

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static(routes.BUILD));
app.use(express.static(routes.PUBLIC_PATH));

app.get("/", (req, res) => {
    res.sendFile(path.join(routes.BUILD, "index.html"));
});

app.get("/matrix", (req, res) => {
    let inputRows = req.query.inputRows;
    let {matrix, ifTrue} = require("./runtests/runPercolation")(inputRows);
    console.log(ifTrue);
    res.send({inputRows, matrix, ifTrue});
});

// app.put("/matrix", (req, res) => {
//     let body = req.body;
//     let inputRows = body.inputRows;
//     let {matrix, ifTrue} = require("./runtests/runPercolation")(inputRows);
//     let objIfTrue;
//     if(ifTrue){
//         objIfTrue = {"ifTrue": true};
//     }else{
//         objIfTrue = {"ifTrue": false};
//     }
//     res.send({inputRows, matrix, objIfTrue});
//     console.log(inputRows);
// });

app.listen(port, ()=> console.log(`the app listening on port ${port}`));
  