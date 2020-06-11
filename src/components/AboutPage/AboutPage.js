import React, {Component} from 'react';

//imports for Material UI styling
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'; 
import Typography from '@material-ui/core/Typography';

//import for background image
import Image from '../shuttle.jpeg';

//declaring style properties
const styles = theme => ({
    root: {
      backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat',
      padding: 50,
      height: 1000,
      backgroundColor: theme.palette.common.white
    },
    card: {
      marginTop: 150,
      marginLeft: 400,
      padding: 30,
      backgroundColor: theme.palette.common.white,
      width: 200,
    },
  body: {
    paddingLeft: 25,
  },
})


class AboutPage extends Component {
  render(){
    const classes = this.props.classes;
    return(
      <>
        <div className={classes.root}>
          <Card className={classes.card}>
              <Typography variant="h6">Technologies</Typography>
            <div className={classes.body}>
                <Typography >React</Typography>
                <Typography>Redux</Typography>
                <Typography>Node.js</Typography>
                <Typography>Express</Typography>
                <Typography>PostgreSQL</Typography>
                <Typography>Firebase</Typography>
                <Typography>Material UI</Typography>
            </div>
          </Card>
        </div>
      </>
    );
  }
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutPage);
