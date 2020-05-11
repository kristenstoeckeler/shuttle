import React, { Component } from 'react';

//imports for Material UI styling
import { withStyles } from '@material-ui/core/styles';

//background image import
import Image from '../shuttle.jpeg'; 

//importing CreateAccountCard component
import CreateAccountCard from '../CreateAccountCard/CreateAccountCard';

//declaring style properties
const styles = {
  root: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    padding: 50,
    height: 1000,
  }
};


class RegisterPage extends Component {

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

export default withStyles(styles)(RegisterPage);

