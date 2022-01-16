import React, { Component } from 'react'

class Input extends Component {
    inputRef = React.createRef();
    state = {color:"pink",display:"block"}

    onInputPass = () => {
        let input_val = this.inputRef.current.value;
        // console.log(input_val.length)
        if (input_val.length >= 8) {
            this.setState({color:"yellowgreen"});
            this.setState({display:"none"});
            
        } else {
            this.setState({color:"pink"});
            this.setState({display:"block"});
        }
    }

    render() {
        return (
            <div className='my-5'>
                <hr />
                <h4 style={{display:this.state.display}} className='text-danger'>Please Enter Strongest Password</h4>
                <input style={{background: this.state.color}} ref={this.inputRef} onInput={this.onInputPass} placeholder="Enter Password ..." type="password" className='form-control col-3 my-5' />
            </div>
        )
    }
}

export default Input
