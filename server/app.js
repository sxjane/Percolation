const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
var morgan = require("morgan");

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.use(morgan("dev"));

var {matrix, ifPercolation} = require("./runtests/runPercolation")(3);

app.get("/", (req, res) => res.send(matrix, ifPercolation));
app.listen(port, ()=> console.log(`the app listening on port ${port}`));