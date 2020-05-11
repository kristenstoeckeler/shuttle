import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';


import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';




const styles = theme => ({
    textField: {
        marginTop: 20,
        marginLeft: 60,
        width: 'max-content',
        fontWeight: 500,
        color: theme.palette.secondary.dark,
        paddingTop: 30,
        borderRadius: 5,
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
        float: 'right',
        marginTop: 30,
        marginRight: 60,

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
    },
    background: {
        backgroundColor: theme.palette.common.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    }
});



class ProjectHeader extends Component {

    state = {
        id: this.props.match.params,
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
        console.log( 'in componentDidMount Project Header');
        
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

    handleClick = () => {
        console.log( 'in handleClick');
    }


    render() {
        const classes = this.props.classes;
        return (
            <>
            <header>    
                <Grid className={classes.background}>         
                    <Grid >
                        <Button type="submit" onClick={this.handleSubmit} className={classes.button}>Save Project</Button>
                    </Grid>
                    <Grid>
                        <Typography onClick={this.handleClick} variant="h4" component="h5" className={classes.textField}>
                            {this.props.detail.project_name}
                        </Typography>
                    </Grid>

                </Grid>

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