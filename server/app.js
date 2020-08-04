const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
var morgan = require("morgan");
const path=require("path");

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static("dist"));

var {matrix, ifPercolation} = require("./runtests/runPercolation")(10);

app.get("/", (req, res) => res.sendFile(path.join(process.cwd(), "dist", "index.html")));
//app.get("/main.js", (req, res) => res.sendFile(path.join(process.cwd(), "dist", "main.js")));
app.listen(port, ()=> console.log(`the app listening on port ${port}`));
  