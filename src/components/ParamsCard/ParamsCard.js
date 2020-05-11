import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    root: {
        // ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        paddingRight: 5,
    },
    details: {
        padding: 20,
        backgroundColor: '#edf7f6',
        width: 'auto',
        margin: 10,
        fontSize: 14,
    },

});


class ParamsCard extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <>
                <div className={classes.root}>
                            <Paper elevation={1} className={classes.details} >
                                <div border={1}>
                                <Typography variant="h6" component="h5">
                                    Draft Specs
                                </Typography>
                                <Typography component="p">
                                    Finished length: <b>{this.props.detail.finished_length_in} in.</b>
                                </Typography>
                                <Typography component="p">
                                    Quantity: <b>{this.props.detail.quantity}</b>
                                </Typography>
                                <Typography component="p">
                                    Fringe length: <b>{this.props.detail.fringe_length_in} in.</b>
                                </Typography>
                                <Typography component="p">
                                    Sampling length: <b>{this.props.detail.sampling_length_in} in.</b>
                                </Typography>
                                <Typography component="p">
                                    Loom waste: <b>{this.props.detail.loom_waste_in} in.</b>
                                </Typography>
                                <Typography component="p">
                                    Warp takeup: <b>{this.props.detail.warp_takeup_percent}%</b>
                                </Typography>
                                <Typography component="p">
                                    Length shrinkage: <b>{this.props.detail.length_shrinkkage_percent}%</b>
                                </Typography>
                                <Typography component="p">
                                    Finished width: <b>{this.props.detail.finished_width_in} in.</b>
                                </Typography>
                                <Typography component="p">
                                    Width shrinkage: <b>{this.props.detail.width_shrinkage_percent}%</b>
                                </Typography>
                                <Typography component="p">
                                    Sett: <b>{this.props.detail.sett}</b>
                                </Typography>
                                <Typography component="p">
                                    Extra ends: <b>{this.props.detail.extra_ends}</b>
                                </Typography>
                                <Typography component="p">
                                    Warp ypp: <b>{this.props.detail.warp_yards_per_lb} yds. per lb.</b>
                                </Typography>
                                {/* <Typography component="p">
                                    Picks per inch: <b>{this.props.detail.ppi} ppi</b>
                                </Typography> */}
                                <Typography component="p">
                                    Takeup: <b>{this.props.detail.weft_takeup_percent}%</b>
                                </Typography>
                                </div>
                            </Paper>
                            <Paper elevation={1} className={classes.details} >
                                <div border={1}>
                                        <Typography variant="h6" component="h5">
                                            Warp Calculations
                                        </Typography>
                                        <Typography component="p">
                                            Number of ends: <b>{this.props.detail.warp_ends}</b>
                                        </Typography>
                                        <Typography component="p">
                                            Total yards: <b>{this.props.detail.warp_total_yds} yds.</b>
                                        </Typography>
                                        <Typography component="p">
                                            Total ounces: <b>{this.props.detail.warp_total_oz} oz.</b>
                                        </Typography>
                                        <Typography component="p">
                                            Warp  length: <b>{this.props.detail.warp_length_in} in.</b>
                                        </Typography>
                                        <Typography component="p" gutterBottom>
                                            Width in reed: <b>{this.props.detail.width_in_reed_in} in.</b>
                                        </Typography>
                                </div>
                            </Paper>
                    {/* <Paper elevation={1} className={classes.details} >
                        <div border={1}>
                            <Typography variant="h6" component="h5">
                                Weft Calculations
                            </Typography>
                            <Typography component="p">
                                Total yards: <b>{this.props.detail.weft_total_yds} yds.</b>
                            </Typography>
                            <Typography component="p">
                                Total ounces: <b>{this.props.detail.weft_total_oz} yds.</b>
                            </Typography>
                        </div>
                    </Paper> */}
                </div>
            </>
        );
    }
}


ParamsCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const putReduxStateOnProps = reduxStore => ({
    user: reduxStore.user,
    detail: reduxStore.detail,
})

export default withStyles(styles)(connect(putReduxStateOnProps)(ParamsCard));