import { Component } from "react";
import { httpService } from "../services";

// const obj={
//   count:0,
// }

class ClassComponent extends Component {
  // data = [];
  state = {
    count: 0,
    data: [],
    id: "",
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  fetchData = async () => {
    const res = await httpService.get("/posts");
    this.setState({ data: res });
  };

  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(props, state) {
    console.log(props, state, this.state.id);

  }
  componentWillUnmount() {
    
  }

  render() {
    const increment = () => {
      this.setState({ count: this.state.count + 1 });
    };

    console.log(this.state.data);

    return (
      <>
        <h2>Class Component {this.state.count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}

export default ClassComponent;
