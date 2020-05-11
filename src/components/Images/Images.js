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
        float: 'left',
        marginBottom: 4,
        padding: 1,
        flexGrow: 1,
    },
});


class Images extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_IMAGES', payload: this.props.match.params });
    }
    render() {
        const classes = this.props.classes;
        return (
            <>
            <Grid container spacing={16} className={classes.root}>
             {this.props.images.map((image) => {
                    return (
                        <>
                        <Grid item xs={3}>
                            <Paper className={classes.root}>
                                <img src={image.location} height='200' width='200' />
                            </Paper>
                        </Grid>
                        </>
                    );
                })}
            </Grid>
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