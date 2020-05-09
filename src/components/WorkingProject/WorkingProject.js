import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Image from '../blues.jpeg'; 
import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectFooter from '../ProjectFooter/ProjectFooter';
import TabMenu from '../TabMenu/TabMenu';

const styles = {
    root: {
        // backgroundImage: `url(${Image})`,
        // backgroundRepeat: 'no-repeat',
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
    render() {
        const classes = this.props.classes;

        return (
            <>
            <div className={classes.root}>
                <ProjectHeader />
                <TabMenu />
                {/* <ProjectFooter /> */}
            </div>
            </>
        );
    }
}

export default withStyles(styles)(workingProject);