import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Dashboard from './Components/dashboard/Dashboard';
import ProjectDetail from './Components/projects/ProjectDetail';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import CreateProject from './Components/projects/CreateProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetail} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;