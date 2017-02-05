"use strict";

const React = require('react');

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='search'>
        <header className='search-header'>
          [Search Title]
        </header>
        <div className='results'>
          {this.props.children}
        </div>
        <div className='search-footer pagination'>
          [Total Results]
        </div>
      </div>
    );
  }
}

module.exports = Search;
