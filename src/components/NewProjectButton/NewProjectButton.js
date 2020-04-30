import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

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

    handleSubmit = (event) => {
        console.log( 'in handleSubmit ');
        // event.preventDefault();
        this.props.history.push('/new-project');
    };

    render(){
        const classes = this.props.classes;
        return (
            <>
            <div>
                <form onSubmit={this.handleSubmit}>
                        <Button
                className={classes.button}
                type="submit"
                ><Icon>add_circle</Icon>Create New Project</Button>
                </form>
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
})
// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action

export default withStyles(styles)(withRouter(connect(putReduxStateOnProps)(NewProjectButton)));

// export default withStyles(styles)(connect(putReduxStateOnProps)(NewProjectButton));
