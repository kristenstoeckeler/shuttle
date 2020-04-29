import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserPage from '../UserPage/UserPage';
import DashboardGrid from '../DashboardGrid/DashboardGrid';
import NewProjectButton from '../NewProjectButton/NewProjectButton';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class Dashboard extends Component {
  render(){
    return (
      <div>
        <h1>
          Dashboard
        </h1>
        <UserPage />
        <NewProjectButton />
        <DashboardGrid />
      </div>
    ); 
  }
}
  

export default connect()(Dashboard);
