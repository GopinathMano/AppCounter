import React from "react";
import FunApp from "./function.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      fname: "Guvi",
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <>
        <p>
          Hello world {this.props.name} age :{this.props.age} class components!
        </p>
        <p>Name ={this.state.fname} </p>
        <p>Count:{this.state.count} </p>
        <button onClick={this.increment}>Increment++</button>
        <br></br> <br></br>
        <button onClick={this.decrement}>Decrement--</button>
        <br></br> <br></br>
        <button onClick={this.reset}>Reset</button>
        <FunApp name={"Guvi"} />
      </>
    );
  }
}

export default App;
