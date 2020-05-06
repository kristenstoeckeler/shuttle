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
        length_shrinkage_percent: this.props.detail.length_shrinkage_percent,
        finished_width_in: this.props.detail.finished_width_in,
        width_shrinkage_percent: this.props.detail.width_shrinkage_percent,
        sett: this.props.detail.sett,
        extra_ends: this.props.detail.extra_ends,
        warp_yards_per_lb: this.props.detail.warp_yards_per_lb,
        warp_length_in: this.props.detail.warp_length_in,
        weaving_length_tension_in: this.props.detail.weaving_length_tension_in,
        weaving_length_relaxed_in: this.props.detail.weaving_length_relaxed_in,
        width_in_reed_in: this.props.detail.width_in_reed_in,
        warp_ends: this.props.detail.warp_ends,
        warp_total_yds: this.props.detail.warp_total_yds,
        warp_total_oz: this.props.detail.warp_total_oz,
        ppi: this.props.detail.ppi,
        weft_takeup_percent: this.props.detail.weft_takeup_percent,
        weft_ypp: this.props.detail.weft_ypp,
        weft_total_yds: this.props.detail.weft_total_yds,
        weft_total_oz: this.props.detail.weft_total_oz,
        notes: this.props.notes,
    }

    componentDidMount() {
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
        
        this.setState({
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
            length_shrinkage_percent: this.props.detail.length_shrinkage_percent,
            finished_width_in: this.props.detail.finished_width_in,
            width_shrinkage_percent: this.props.detail.width_shrinkage_percent,
            sett: this.props.detail.sett,
            extra_ends: this.props.detail.extra_ends,
            warp_yards_per_lb: this.props.detail.warp_yards_per_lb,
            warp_length_in: this.props.detail.warp_length_in,
            weaving_length_tension_in: this.props.detail.weaving_length_tension_in,
            weaving_length_relaxed_in: this.props.detail.weaving_length_relaxed_in,
            width_in_reed_in: this.props.detail.width_in_reed_in,
            warp_ends: this.props.detail.warp_ends,
            warp_total_yds: this.props.detail.warp_total_yds,
            warp_total_oz: this.props.detail.warp_total_oz,
            ppi: this.props.detail.ppi,
            weft_takeup_percent: this.props.detail.weft_takeup_percent,
            weft_ypp: this.props.detail.weft_ypp,
            weft_total_yds: this.props.detail.weft_total_yds,
            weft_total_oz: this.props.detail.weft_total_oz,
            notes: this.props.notes,
        })

        this.props.dispatch({
            type: 'UPDATE_PROJECT',
            payload: {
                projectId: this.props.match.params,
                projectDetails: this.props.detail,
                projectNotes: this.props.notes,
            }
        
        })
    }


    render() {
        const classes = this.props.classes;
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
    id: reduxStore.id,
})

export default withStyles(styles)(withRouter(connect(putReduxStateOnProps)(ProjectHeader)));