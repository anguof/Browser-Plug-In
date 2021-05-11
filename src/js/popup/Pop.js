import React from "react";
import { hot } from "react-hot-loader";
import "./Pop.css";

class Pop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <p>{"绿色屏保，保护眼睛。"}</p>
      </div>
    );
  }
}

export default hot(module)(Pop);
