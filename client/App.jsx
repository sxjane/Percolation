import React from "react";
import Canvas from "./components/Canvas";
import Header from "./components/Header";
import { text } from "express";

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.getMatrix = this.getMatrix.bind(this);
    }

    getMatrix(){
        console.log('getMatrix');
        return <Canvas />;
    }

    render(){
        return(
            <button onClick={this.getMatrix}>Click</button>
        );
    }
}