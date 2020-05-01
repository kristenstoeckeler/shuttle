import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


import Button from '@material-ui/core/Button';
import { withStyles, withTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: theme.palette.common.white,
  },
  input: {
    display: 'none',
  },
});

// This button shows up in multiple locations and is styled differently
    // because it's styled differently depending on where it is used, the className
    // is passed to it from it's parents through React props

class LogOutButton extends Component {

  handleClick = () => {
    console.log( 'in handleClick to Logout');
    this.props.dispatch({ type: 'LOGOUT' });
    this.props.history.push('/home')
  }

  render(){
   const classes  = this.props.classes;
  
   return(
     <Button
       className={classes.button}
       onClick={() => this.handleClick()}
     >Log Out</Button>
   );
   } 
}


// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default withStyles(styles)(withRouter(connect()(LogOutButton)));
