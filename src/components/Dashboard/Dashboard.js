import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardGrid from '../DashboardGrid/DashboardGrid';
import NewProjectButton from '../NewProjectButton/NewProjectButton';
import { withStyles } from '@material-ui/core/styles';
import Image from '../neutral.jpeg'; 



const styles = {
  root: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    padding: 50,
    height: 1000,
  }
};

class Dashboard extends Component {
  render(){
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <div>
          <NewProjectButton />
          <DashboardGrid />
        </div>
       
      </div>
    ); 
  }
}
// export default withStyles(styles)
// withRouter(connect(putReduxStateOnProps)(NewProjectButton));


export default withStyles(styles)(connect()(Dashboard));

