"use strict";

const React = require('react'),
  {Link} = require('react-router');

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='app'>
        <header className="primary-header"></header>
        <aside className="primary-aside">
          <nav>
            <ul>
              <li><Link
                    to='/'
                    activeClassName="active">
                    Home
                </Link>
              </li>
              <li><Link
                    to='/users'
                    activeClassName='active'>
                    Users
                </Link>
              </li>
              <li><Link
                to='/widgets'>
                Widgets
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

module.exports = Main;
