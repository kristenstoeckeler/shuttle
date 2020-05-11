import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Image from '../shuttle.jpeg';
import Card from '@material-ui/core/card'; 
import Typography from '@material-ui/core/Typography';




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

export default withStyles(styles)(connect()(AboutPage));
