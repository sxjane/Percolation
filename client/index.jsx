import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const name = "Josh Perez";

const element = <h1>Hello, {name}</h1>;

// function App(){
//     return <h2>Hello</h2>;
// }


ReactDOM.render(
    <App/>,
    document.getElementById("react")
);