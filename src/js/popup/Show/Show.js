import React from "react";
import "./Show.css";

class Show extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="home">
        <span className='terminal'>{this.props.id}当前港口：B136 Los Angeles</span> <span>containerNumber: 10</span>
      </div>
    )
  }
};

export default Show
