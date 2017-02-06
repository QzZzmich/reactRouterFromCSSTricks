"use strict";

const React = require('react');

class Widgets extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul
        className='widget-list'>
        <li>Widget 1</li>
        <li>Widget 2</li>
        <li>Widget 3</li>
      </ul>
    );
  }
}

module.exports = Widgets;
