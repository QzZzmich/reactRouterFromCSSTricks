"use strict";

const React = require('react'),
  {Link} = require('react-router');

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul className='user-list'>

        {this.props.users.map((user) => {
          return (
            <li key={user.id}>
              <Link
                to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}

      </ul>
    );
  }
}

module.exports = UserList;
