import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';


import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './Images.css';
import { withRouter } from 'react-router';





const styles = theme => ({
    root: {
        flexGrow: 1,
    },

    paper: {
        float: 'left',
        margin: 8,
        padding: theme.spacing.unit / 2,
    }
});


class Images extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_IMAGES', payload: this.props.match.params });
    }
    render() {
        const classes = this.props.classes;
        return (
            <>
            <div className={classes.root}>
                <Grid container spacing={24}>
                    {this.props.images.map((image) => {
                            return (
                                <>
                                <Grid >
                                    <Paper className={classes.paper}>
                                        <img src={image.location} height='200' width='200' />
                                    </Paper>
                                </Grid>
                                </>
                            );
                        })}
                </Grid>
            </div>
            </>
        );
    }
}


Images.propTypes = {
    classes: PropTypes.object.isRequired,
};

const putReduxStateOnProps = reduxStore => ({
    user: reduxStore.user,
    detail: reduxStore.detail,
    images: reduxStore.images,

})

export default withStyles(styles)(withRouter(connect(putReduxStateOnProps)(Images)));