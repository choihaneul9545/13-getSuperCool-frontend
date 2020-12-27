import React from "react";

class Description extends React.Component {
  render() {
    return (
      <div className="description">
        s
        {this.props.description.split("\n").map(line => (
          <div>{line}</div>
        ))}
      </div>
    );
  }
}

export default Description;
