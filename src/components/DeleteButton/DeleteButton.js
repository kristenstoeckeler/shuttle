import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


import PropTypes from 'prop-types';
import TabMenu from '../TabMenu/TabMenu';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
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
    }
});


class DeleteButton extends Component {

    handleSubmit = (event) => {
        console.log('in handleSubmit for delete');

        // alert('Are you sure you want to delete this project?');
        this.props.dispatch({ 
            type: 'DELETE', 
            payload: this.props.detail.id
        });
        this.props.history.push(`/home`)
    }

    

    render() {
        const classes = this.props.classes;
        return (
            <>
                <Grid align-items-xs-right justify-xs-flex-end>
                    <Button type="submit" onClick={this.handleSubmit} className={classes.button}>Delete Project</Button>
                </Grid>
            </>
        );
    }
}

DeleteButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

const putReduxStateOnProps = reduxStore => ({
    user: reduxStore.user,
    detail: reduxStore.detail,
})

export default withStyles(styles)(withRouter(connect(putReduxStateOnProps)(DeleteButton)));