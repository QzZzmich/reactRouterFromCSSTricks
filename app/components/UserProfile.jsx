"use strict";

const React = require('react');

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <h1>
        User profile for userId: {this.props.params.userId}
      </h1>
    );
  }
}

module.exports = UserProfile;
