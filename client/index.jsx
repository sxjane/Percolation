import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
// import Canvas from "./components/Canvas";
import Header from "./components/Header"

// class Header extends React.Component{
//     render(){
//         return <h1>Hello React</h1>
//     }
// }
const element = <h1>Hello Element</h1>
ReactDOM.render(
    <Header/>,
    document.getElementById("react")
);