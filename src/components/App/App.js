import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';


// import Footer from '../Footer/Footer';
import AboutPage from '../AboutPage/AboutPage';
import Dashboard from '../Dashboard/Dashboard';
import Nav from '../Nav/Nav';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import WorkingProject from '../WorkingProject/WorkingProject';

//styles imports
import './App.css';
import 'typeface-roboto';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/home will show the 'Dashboard' if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Register' page with 'Login' Navbar.*/}
            <ProtectedRoute
              exact
              path="/home"
              component={Dashboard}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the 'Working Project' page instead. */}
            <ProtectedRoute
              exact
              path="/draft/:id"
              component={WorkingProject}
            />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>

          {/* <Footer /> */}
        </div>
      </Router>
  )}
}

export default App;
