import React, { Component } from 'react';
import { connect } from 'react-redux';

//imports for Material UI styling
import { withStyles } from '@material-ui/core/styles';

//importing child components
import DashboardGrid from '../DashboardGrid/DashboardGrid';
import NewProjectButton from '../NewProjectButton/NewProjectButton';

//importing image for background
import Image from '../neutral.jpeg'; 


//declaring style properties
const styles = {
  root: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    padding: 50,
    height: 1000,
  }
};

class Dashboard extends Component {

  //resetting state and sending it to reset DETAIL reducer so that navigating 
  //between projects through dashboard doesn't render wrong information
  state = {
    project_name: '',
    finished_length_in: 0,
    quantity: 0,
    fringe_length_in: 0,
    sampling_length_in: 0,
    loom_waste_in: 0,
    warp_takeup_percent: 0,
    length_shrinkage_percent: 0,
    finished_width_in: 0,
    width_shrinkage_percent: 0,
    sett: 0,
    extra_ends: 0,
    warp_yards_per_lb: 0,
    warp_length_in: 0,
    weaving_length_tension_in: 0,
    weaving_length_relaxed_in: 0,
    width_in_reed_in: 0,
    warp_ends: 0,
    warp_total_yds: 0,
    warp_total_oz: 0,
    ppi: 0,
    weft_takeup_percent: 0,
    weft_ypp: 0,
    weft_total_yds: 0,
    weft_total_oz: 0,
    notes: 0,
  }

  //resetting DETAIL reducer
  componentDidMount() {
    this.props.dispatch({
      type: 'DETAIL_REDUCER',
      payload: this.state
    })
  }//end of componentDidMount

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

export default withStyles(styles)(connect()(Dashboard));

