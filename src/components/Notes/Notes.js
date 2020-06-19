import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';



import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
   root: {
        marginLeft: 10,
        flexGrow: 1,
   },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        backgroundColor: theme.palette.common.white,
        padding: 20,
        fullWidth: true,
        width: 500,
        borderRadius: 20,
    },
    grid: {
        marginLeft: 10,
    },
    details: {
        marginTop: 20,
        padding: 20,
        border: 50,
        backgroundColor: '#ffeceb',
        grid: {
            width: 800,
        },
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

    componentDidMount() {
        this.props.dispatch({ type: 'DETAILS', payload: this.props.match.params });
    }

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
            <div className={classes.root}>            
            <Grid xs={12} container direction="row" alignItems="top">
                <Paper elevation={1} className={classes.details} >
                    <Typography variant="h6" component="h5">
                        Notes
                    </Typography>  
                    <TextField
                        id="standard-textarea"
                        defaultValue={this.props.detail.notes}
                        multiline
                        className={classes.textField}
                        margin="normal"
                        onChange = {event => this.handleChange(event)}
                    />     
                </Paper> 
            </Grid>
            </div>
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

export default withStyles(styles)(withRouter(connect(putReduxStateOnProps)(Notes)));