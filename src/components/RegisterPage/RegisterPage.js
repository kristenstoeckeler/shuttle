import React, { Component } from 'react';
import {connect} from 'react-redux';
import CreateAccountCard from '../CreateAccountCard/CreateAccountCard';
import Image from '../shuttle.jpeg'; 
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    padding: 50,
    height: 1000,
  }
};

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const classes = this.props.classes;
    return (
      <>
      <div>
        <center className={classes.root}>
            <CreateAccountCard />
        </center>

      </div>
      </>
    );
  }
}


const mapStateToProps = state => ({
  errors: state.errors,
});

export default withStyles(styles)(connect(mapStateToProps)(RegisterPage));

