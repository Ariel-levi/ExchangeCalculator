import React, { Component } from 'react'
import Colors from './color'

class AppColors extends Component {
    state = {color:"black"}

    changeColor = (_newColor) => {
        this.setState({color:_newColor});
    }

    render() {
        return (
            <div className='my-5'>
                <h1 style={{color:this.state.color}}>Welcome To Custom</h1>
                <p>Select a clolor</p>
                <Colors changeColor={this.changeColor} />
            </div>
        )
    }
}

export default AppColors
