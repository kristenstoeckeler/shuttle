import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DeleteButton from '../DeleteButton/DeleteButton';



const styles = theme => ({
    delete: {
        // float: 'right',
    }
});



class ProjectFooter extends Component {

    render() {
        console.log('rendering project header');
        const classes = this.props.classes;
        return (
            <>
                <footer className={classes.delete}>
                    <DeleteButton />    
                </footer>
            </>
        );
    }
}

ProjectFooter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(connect()(ProjectFooter)));