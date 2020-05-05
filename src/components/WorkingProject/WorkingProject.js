import React, { Component } from 'react';
import { connect } from 'react-redux';



import ProjectHeader from '../ProjectHeader/ProjectHeader';
import TabMenu from '../TabMenu/TabMenu';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class workingProject extends Component {
    render() {
        return (
            <>
                {/* {JSON.stringify(this.props.name)} */}
                {/* {JSON.stringify(this.props.project)} */}
                {JSON.stringify(this.props.detail)}
                {/* {JSON.stringify(this.props.working)} */}
                <ProjectHeader />
                <TabMenu />
            </>
        );
    }
}

const putReduxStateOnProps = reduxStore => ({
    name: reduxStore.name,
    detail: reduxStore.detail
})

export default withStyles()(connect(putReduxStateOnProps)(workingProject));