import React  , {Component} from "react"

export default class Counter extends Component{
    constructor(){
        super()
        this.state = {count : 0}
    }

    handleClick = (ele) =>{
        this.setState({count : this.state.count + ele})
    }

    render(){
        return (
            <>
                <h1>Counter App</h1>
                <p>{this.state.count}</p>
                <div>
                    <button onClick={()=>this.handleClick(1)}>+</button>
                    <button onClick={()=>this.handleClick(-1)}>-</button>
                    <button onClick={()=>this.handleClick(-this.state.count)}>Reset</button>
                </div>
            </>
        )
    }
}