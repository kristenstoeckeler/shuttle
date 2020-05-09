import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
        padding: 15,
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
        color: theme.palette.primary.main,
        },
    }
});


class NewProjectButton extends Component{

    state = {
        open: false,
        name: ''
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };


    handleCancel = () => {
        this.setState({ open: false });
    };

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log( 'right before dispatch. Here is state.name ', this.state.name);
        // event.preventDefault();

        this.setState({
            open: false,
        });

        this.props.dispatch({
            type: 'CREATE_NEW',
            payload: {
                name: this.state.name,
                history: this.props.history
            }
        });

        this.props.history.push('/draft');
    };

    render(){
        const classes = this.props.classes;
        console.log( 'heres state', this.state)
        return (
            <>
            <div>
                <Button
                className={classes.button}
                type="submit"
                onClick={this.handleClickOpen}
                ><Icon>add_circle</Icon>Create New Project</Button>
            </div>
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Name Your Project</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Project"
                            type="text"
                            fullWidth
                            onChange={event => this.handleChange(event)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCancel} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
           </div>
            </>
        );
    }
}

NewProjectButton.propTypes = {
    classes: PropTypes.object.isRequired,
};


const putReduxStateOnProps = (reduxStore) => ({
    user: reduxStore.user,
    name: reduxStore.name,
})
// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action

export default withStyles(styles)(withRouter(connect(putReduxStateOnProps)(NewProjectButton)));

// export default withStyles(styles)(connect(putReduxStateOnProps)(NewProjectButton));
