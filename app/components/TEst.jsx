"use strict";

const React = require('react');

class TEst extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h4>TEst module</h4>
        {this.props.children}
      </div>
    );
  }
}

module.exports = TEst;
