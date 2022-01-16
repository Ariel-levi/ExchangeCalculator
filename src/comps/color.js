import React, { Component } from 'react'

class Colors extends Component {

    onClickBlue = () => {
        this.props.changeColor("blue");
    }
    
    onClickSilver = () => {
        this.props.changeColor("silver");
    }
    
    onClickGreen = () => {
        this.props.changeColor("green");
    }


    render() {
        return (
            <div>
                <hr />
                <h4>Child Component</h4>
                <div className='d-flex justify-content-center my-5'>
                    <button onClick={this.onClickBlue} className='btn btn-outline-primary'>blue</button>
                    <button onClick={this.onClickSilver} className='btn btn-outline-secondary mx-3'>silver</button>
                    <button onClick={this.onClickGreen} className='btn btn-outline-success'>green</button>
                </div>
            </div>
        )
    }
}

export default Colors
