import React from "react";
import axios from "axios";

export default class Canvas extends React.Component{
    constructor(props){
        super(props);
        this.state = {squareRows:0,
            matrix: null,
            ifTrue: false,
            textNumberValue:10};
        this.getMatrixFromServer = this.getMatrixFromServer.bind(this);
        this.drawMatrix = this.drawMatrix.bind(this);
        this.drawBlackCell = this.drawBlackCell.bind(this);
        this.drawWhiteCell = this.drawWhiteCell.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        const width = 400;
        const height = 400;
    }

    componentDidMount(){
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.getMatrixFromServer();
    }

    getMatrixFromServer(){
        let inputRows = this.state.textNumberValue;

        axios.get("/matrix", {params:{inputRows}}).then((res)=>{
            console.log('get back from server')
            this.setState({squareRows: res.data.inputRows});
            this.setState({matrix: res.data.matrix});
            this.setState({ifTrue: res.data.ifTrue});
            this.ctx.clearRect(0, 0, 400, 400);
            this.drawMatrix();
        })
            .catch((err)=>{
                console.log(err);
            });
    }
    drawMatrix(){
        let pos1;
        let pos2;
        let squareRows = this.state.squareRows;
        let matrix = this.state.matrix;
        let interval = Math.floor(400/this.state.squareRows);
        for(let i = 0; i < squareRows*squareRows; i++){
            pos1 = (i % squareRows) * interval; 
            pos2 = (Math.floor(i/squareRows)) * interval;
            matrix[i] ? this.drawWhiteCell(pos1,pos2, interval) : this.drawBlackCell(pos1, pos2, interval);
        }
    }
    drawBlackCell(pos1, pos2, interval){
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(pos1, pos2, interval, interval);
    }
    drawWhiteCell(pos1, pos2, interval){
        this.ctx.strokeStyle = "black";
        this.ctx.strokeRect(pos1, pos2, interval, interval);
    }
    handleChange(event){
        this.setState({textNumberValue: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        this.getMatrixFromServer();
    }
 
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        RowsOfSquares:
                        <input type="text" value={this.state.textNumberValue} onChange={this.handleChange} id="number" required/>
                    </label>
                    <input type="submit" value="Get Another Matrix" />
                </form>
                <br />
                <canvas ref="canvas" width="400" height="400"/>
                {this.state.ifTrue && <h3>There is a path from the top to the bottom</h3>}
                {!this.state.ifTrue && <h3>There is no path from the top to the bottom</h3>}
            </div>
        )
    }
}