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

        <li><Link
          to='users/2'>Michael</Link></li>


        <li><Link
          to='users/1'>Ryan</Link></li>


        <li><Link
          to='users/3'>Dan</Link></li>


        <li>  <Link
          to='users/4'>Matt</Link></li>

      </ul>
    );
  }
}

module.exports = UserList;
