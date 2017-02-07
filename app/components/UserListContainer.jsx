"use strict";

const React = require('react'),
  UserList = require('UserList');

class UserListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 2,
          name: "Michael"
        },
        {
          id: 1,
          name: "Ryan"
        },
        {
          id: 3,
          name: "Dan"
        },
        {
          id: 4,
          name: "Matt"
        }
      ]
    };
  }

  render() {
    return(
      <UserList users={this.state.users}/>
    );
  }
}

module.exports = UserListContainer;
