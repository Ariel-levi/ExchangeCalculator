import React, { Component } from "react";

class AppComp extends Component {
  inputRef = React.createRef();
  selectRef = React.createRef();

  // state = { num: 0 };
  state = { num: 0 };
  // state = { num: 0, money: 0, coin: 0 };

  // cal = () => {
  //   let money = this.inputRef.current.value;
  //   let coin = this.selectRef.current.value;

  //   // this.setState({ num: money * coin });
  //   this.setState({ num: 100 });
  // };

  run = () => {
    // let money = this.inputRef.current.value;
    // let coin = this.selectRef.current.value;
    // this.setState({ money: this.inputRef.current.value });
    // this.setState({ coin: this.selectRef.current.value });

    this.setState({
      num: this.inputRef.current.value * this.selectRef.current.value,
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h1>AppComp</h1>
        <select
          ref="selectRef"
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>Select Coin</option>
          <option value="3.12">USD</option>
          <option value="3.51">EUR</option>
          <option value="0.094">BAHT</option>
        </select>
        <br />
        <input
          ref="inputRef"
          type="text"
          placeholder="Enter amount of money"
          className="form-control"
        />
        <button onClick={this.run} className="btn btn-info my-3">
          Run
        </button>
        <hr />
        <h2>₪ {this.state.num}</h2>
      </div>
    );
  }
}

export default AppComp;
