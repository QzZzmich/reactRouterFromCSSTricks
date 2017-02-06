"use strict";
const {Router, Route, browserHistory, IndexRoute} = require('react-router'),
  React = require('react'),
  Main = require('Main'),
  Search = require('Search'),
  Home = require('Home'),
  UserProfile = require('UserProfile'),
  Widgets = require('Widgets'),
  UserList = require('UserList');

module.exports = (
  <Router history={browserHistory}>
    <Route
      component={Main}
      path='/'>
      <IndexRoute component={Home}/>

      <Route path='users'>
        <Route
          component={Search}>
          <IndexRoute component={UserList} />
        </Route>
        <Route
          path=':userId'
          component={UserProfile}></Route>
      </Route>
      <Route
        path='widgets'>
        <Route component={Search}>
          <IndexRoute component={Widgets}></IndexRoute>
        </Route>
      </Route>
    </Route>
  </Router>
);
