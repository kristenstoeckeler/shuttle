import React, { Component } from 'react';
import { connect } from 'react-redux';

//passes props to child component to access props.history
import { withRouter } from 'react-router';


//imports for Material UI styling
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//declaring style properties for Material UI elements
const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

////declaring style properties for Material UI elements
const styles = theme => ({
    root: {
        width: '85%',
        margin: 'auto',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        color: "primary",
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.common.white,
        },
    },
    button: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
        padding: 5,
    },
    text: {
        fontWeight: '500',
        fontSize: 18,
        padding: 40,
    },
    date:{
        fontSize: 16,
        fontWeight: '500',
    },
    project: {
        fontSize: 16,
    },
    view: {
        fontSize: 16,
    }
});


class DashboardGrid extends Component {

    state = {
        userId: this.props.user.id,
        projectId: '',
    }

    //dispatching to Project saga to render users projects in Dashboard Grid
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_PROJECTS', payload: this.state.userId });
    }//end componentDidMount 

    handleClick = (projectName, projectId) => {
        console.log( 'in handleClick', projectName, projectId );
        this.props.dispatch({ type: 'WORKING_REDUCER', payload: projectId})

        this.props.history.push(`/draft/${projectId}`)
    }

    render(){
        const classes = this.props.classes;

        return(
            <>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow className={classes.row}>
                                <CustomTableCell align="center" className={classes.project}>PROJECT</CustomTableCell>
                                <CustomTableCell align="center">DATE</CustomTableCell>
                                <CustomTableCell align="center" className={classes.view}>VIEW</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.project.map((project) => {
                                return (
                                    <>
                                    <TableRow className={classes.row} key={project.id}>
                                            <CustomTableCell align="center" component="th" scope="row" className={classes.text}>
                                                {project.project_name}
                                        </CustomTableCell>
                                        <CustomTableCell align="center" className={classes.date}>{project.date}</CustomTableCell>
                                        <CustomTableCell align="center" onClick ={() => this.handleClick(project.project_name, project.id)}>
                                        <Button className={classes.button}>View</Button></CustomTableCell>
                                    </TableRow>
                                    </>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>

            </>
        );
    }
}

DashboardGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

const putReduxStateOnProps = (reduxStore) => ({
    project: reduxStore.project,
    user: reduxStore.user,
});

export default withStyles(styles)(withRouter(connect(putReduxStateOnProps)(DashboardGrid)));

