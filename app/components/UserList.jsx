"use strict";

const React = require('react');

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul className='user-list'>
        <li>Dan</li>
        <li>Ryan</li>
        <li>Michael</li>
      </ul>
    );
  }
}

module.exports = UserList;
