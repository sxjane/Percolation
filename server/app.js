// const express = require("express");
// const app = express();
// const port = 4000;
// const bodyParser = require("body-parser");
// var morgan = require("morgan");

// app.use(bodyParser.urlencoded({
//     extended:true
// }));
// app.use(bodyParser.json());
// app.use(morgan("dev"));

// //var {matrix, ifPercolation} = require("./runtests/runPercolation")(10);

// app.get("/", (req, res) => res.send(matrix, ifPercolation));
// app.listen(port, ()=> console.log(`the app listening on port ${port}`));
const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get("/", (req,res) => {
        return handle(req, res);
    });

    server.post("/", (req,res) =>{
        console.log(req);
        res.send("hello world");
    });
  
    server.listen(3000, err =>{
        if(err) throw err;
        console.log("Ready on http://localhost:3000");
    });
})
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
