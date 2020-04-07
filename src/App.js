import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';
import Link from 'react-router-dom/Link';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';

class App extends Component {
  render () {
    return (
      <div className="App">
        <nav style={{ 
          display: 'flex',
          justifyContent: 'space-evenly'
        }}>
          <Link to="/courses">Courses</Link>
          <Link to="/users">Users</Link>
        </nav>
        <Switch>
          <Route path="/courses" exact component={Courses} />
          <Route path="/users" exact component={Users} />
          <Route path="/courses/:id" component={Course} />
          <Redirect from="/all-courses" to="/courses" />
          <Route render={() => <h3 style={{ textAlign: 'center' }}>Not Found Homie</h3>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
