import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Image from '../shuttlefull.jpeg'; 

import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectFooter from '../ProjectFooter/ProjectFooter';
import TabMenu from '../TabMenu/TabMenu';

const styles = {
    root: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        paddingLeft: 30,
        paddingRight: 30,
        borderStyle: 'solid',
        borderColor: 'lightgray',
        borderWidth: 1.75,
        margin: 20,
        paddingTop: 20,
        borderRadius: 60,
        // display: 'inline-block',
    }
};

class workingProject extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'DETAILS', payload: this.props.match.params });
    }

    render() {
        const classes = this.props.classes;
        console.log('here is match.params', this.props.match.params)
        return (
            <>
            <div className={classes.root}>
                <ProjectHeader />
                <TabMenu />
                <ProjectFooter />
            </div>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    project: reduxStore.project,
    user: reduxStore.user,
});

workingProject.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(withRouter(connect(putReduxStateOnProps)(workingProject)));