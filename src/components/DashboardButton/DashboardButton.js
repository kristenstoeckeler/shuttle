import React from 'react';

//withRouter allows child component to access props for props.history
import { withRouter } from 'react-router';

//imports for Material UI styling
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

//declaring style properties
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        color: theme.palette.common.white,
    },
    input: {
        display: 'none',
    },
});


function DashboardButton(props) {
    const { classes } = props;

    return (
        <Button
            className={classes.button}
            onClick={() => props.history.push('/home')}
        >Dashboard</Button>
    );
}

DashboardButton.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(withRouter(DashboardButton));
