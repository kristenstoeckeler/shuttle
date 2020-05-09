import React, { Component } from 'react';
import { connect } from 'react-redux';

import './LoginPage.css';
import 'typeface-roboto';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    margin: 5,
    color: theme.palette.common.white,
  },
  input: {
    backgroundColor: theme.palette.common.white,
    margin: 4,
    paddingLeft: 10,
  }
}); 


class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const classes = this.props.classes;

    return (
      <div>
        
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form onSubmit={this.login}>
          <div>
            <Input
              placeholder="username" 
              className={classes.input} 
              type="text" 
              name="username" 
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}>
            </Input>
            
            <Input
              placeholder="password" 
              className={classes.input} 
              type="password" 
              name="password" 
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}>
            </Input>
            <Button className={classes.button} type="submit">Login</Button>
          </div>

          {/* <div>
            <input
              className="log-in"
              type="submit"
              name="submit"
              value="Log In"
            />
          </div> */}
        </form>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default withStyles(styles)(connect(mapStateToProps)(LoginPage));

