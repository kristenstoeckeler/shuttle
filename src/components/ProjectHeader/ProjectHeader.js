import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';


import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';



const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        fullWidth: true,
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
    },
    button: {
        margin: 5,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
        align: 'right',
    },
    input: {
        backgroundColor: theme.palette.common.white,
        fontSize: 35,
        margin: 4,
        paddingLeft: 10,
    },
    typography: {
        fontSize: 35,
        margin: 4,
        paddingLeft: 10,
    }
});



class ProjectHeader extends Component {

    state = {
        id: this.props.detail.id,
        project_name: this.props.detail.project_name,
        user_id: this.props.user.id,
        project_status: false,
        finished_length_in: this.props.detail.finished_length_in,
        quantity: this.props.detail.quantity,
        fringe_length_in: this.props.detail.fringe_length_in,
        sampling_length_in: this.props.detail.sampling_length_in,
        loom_waste_in: this.props.detail.loom_waste_in,
        warp_takeup_percent: this.props.detail.warp_takeup_percent,
        length_shrinkage_percent: Number(10),
        finished_width_in: Number(0),
        width_shrinkage_percent: Number(10),
        sett: Number(0),
        extra_ends: Number(0),
        warp_yards_per_lb: Number(0),
        warp_length_in: Number(0),
        weaving_length_tension_in: Number(0),
        weaving_length_relaxed_in: Number(0),
        width_in_reed_in: Number(0),
        warp_ends: Number(0),
        warp_total_yds: Number(0),
        warp_total_oz: Number(0),
        ppi: Number(0),
        weft_takeup_percent: Number(10),
        weft_ypp: Number(0),
        weft_total_yds: Number(0),
        weft_total_oz: Number(0),
        notes: this.props.notes,
    }

    componentDidMount() {
        console.log('KRISTEN namereducer', this.props.name);
        this.props.dispatch({
            type: 'DETAILS',
            payload: this.props.match.params
        })
    }

    handleChange = (event) => {

        this.setState({
            project_name: event.target.value
        });
    }

    handleSubmit = () => {
        this.props.dispatch({
            type: 'UPDATE_PROJECT',
            payload: this.state,
        })
    }


    render() {
        const classes = this.props.classes;
        console.log('here is new state:', this.state);
        return (
            <>
            <header>
                {JSON.stringify(this.props.notes)}
                <Grid align-items-xs-right justify-xs-flex-end>
                    <Button type="submit" onClick={this.handleSubmit} className={classes.button}>Save Project</Button>
                </Grid>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="standard-textarea"
                        className={classes.textField}
                        placeholder={this.props.detail.project_name}
                        defaultValue={this.props.detail.project_name}
                        onChange={event => this.handleChange(event)}
                    ></TextField>
                </form>
            </header>
            </>
        );
    }
}

ProjectHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

const putReduxStateOnProps = reduxStore => ({
    user: reduxStore.user,
    project: reduxStore.project,
    detail: reduxStore.detail,
    working: reduxStore.working,
    notes: reduxStore.notes,
    name: reduxStore.name,
})

export default withStyles(styles)(withRouter(connect(putReduxStateOnProps)(ProjectHeader)));