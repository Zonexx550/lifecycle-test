import React from "react";
import styles from "./LifecycleDemo.module.css";

type State = {
  count: number;
};

export class LifecycleDemo extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(_nextProps: {}, nextState: State) {
    if (nextState.count !== this.state.count) {
      console.log("shouldComponentUpdate — state.count изменился");
      return true;
    }
    return false;
  }

  componentDidUpdate(_prevProps: {}, prevState: State) {
    if (prevState.count !== this.state.count) {
      console.log("componentDidUpdate — state.count изменился");
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log("render");
    return (
      <div className={styles.container}>
        <p>Счётчик: {this.state.count}</p>
        <button onClick={this.handleIncrement} className={styles.button}>
          Увеличить
        </button>
      </div>
    );
  }
}
