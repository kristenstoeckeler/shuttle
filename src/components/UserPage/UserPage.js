import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: theme.palette.common.white,
    margin: 20,
    paddingTop: 20,
    borderRadius: 20,
    width: 'auto',
  },
})

class UserPage extends Component {

  render(){
    const classes = this.props.classes;
    return(
        <>
        <div className={classes.root}>
          <h2 id="welcome">
            Welcome, {this.props.user.username}!
          </h2>
        </div>
        </>
    );
  }
}

UserPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const putReduxStateOnProps = reduxStore => ({
  user: reduxStore.user,
})

export default withStyles(styles)(connect(putReduxStateOnProps)(UserPage));

