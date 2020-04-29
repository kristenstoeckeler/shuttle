import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { withStyles, withTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

// This button shows up in multiple locations and is styled differently
// because it's styled differently depending on where it is used, the className
// is passed to it from it's parents through React props

function DashboardButton(props) {
    const { classes } = props;

    return (
        <Button
            className={classes.button}
            onClick={() => props.dispatch({ type: 'DASHBOARD' })}
        >Dashboard</Button>
    );
}

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default withStyles(styles)(connect()(DashboardButton));
