import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import LoginPage from '../LoginPage/LoginPage';
import Dashboard from '../Dashboard/Dashboard';
import DashboardButton from '../DashboardButton/DashboardButton';
import './Nav.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = theme => ({
  about: {
    fontSize: 16,
    fontWeight: 500,
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    // backgroundColor: theme.palette.secondary.main,

  },
  button: {
    color: theme.palette.common.white,
    // backgroundColor: theme.palette.secondary.main,
  },
  link: {
    color: theme.palette.common.white,
    fontSize: 14,
  }
}); 

function Nav(props){
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <Link to="/home"></Link>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Shuttle: a project tool for handweavers
          </Typography>

          
          {props.user.id ? <DashboardButton/> :
            <>
              <LoginPage className="nav-link" />
            </>
          } 
          {/* <Link className="nav-link" to="/home"></Link> */}

          {/* <Link className="nav-link" to="/home"> */}
            {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
            {/* {props.user.id ? <Dashboard /> : 'Login / Register'}
          </Link> */}
          {/* Show the link to the info page and the logout button if the user is logged in */}
          {props.user.id && (
            <>
              <LogOutButton className="nav-link" />
            </>
          )}
          {/* Always show this link since the about page is not protected */}
          <Link className="link" to="/about"><Typography className={classes.about} color="inherit">ABOUT</Typography>
          </Link>

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(Nav));

