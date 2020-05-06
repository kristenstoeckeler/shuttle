import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';


import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        fullWidth: true,
    },
    dense: {
        marginTop: 16,
    },
    margin: {
        margin: 500,
    },
    menu: {
        width: 200,
    },
    root: {
        flexGrow: 1,
    },

    grid: {
        width: 800,
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
        position: 'right',
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
});


class Notes extends Component {

    handleChange = (event) => {
        console.log( 'in handleChange', event.target.value);
        this.props.dispatch({
            type: 'NOTES', 
            payload: event.target.value,
        });
    }

    render(){
        const classes = this.props.classes;
        return(
            <>
            <h3>NOTES</h3>    
            <TextField
                id="standard-textarea"
                defaultValue={this.props.detail.notes}
                multiline
                className={classes.textField}
                margin="normal"
                onChange = {event => this.handleChange(event)}
            />      
            </>
        );
    }
}


Notes.propTypes = {
    classes: PropTypes.object.isRequired,
};

const putReduxStateOnProps = reduxStore => ({
    user: reduxStore.user,
    detail: reduxStore.detail,
    notes: reduxStore.notes,
})

export default withStyles(styles)(connect(putReduxStateOnProps)(Notes));