import React, { Component } from 'react';
import { connect } from 'react-redux';

//Material UI Imports
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';




const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

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
});

class DashboardGrid extends Component {

    state = {
        userId: this.props.user.id,
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_PROJECTS', payload: this.state.userId });
    }


    render(){
        const classes = this.props.classes;

        return(
            <>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Project</CustomTableCell>
                                <CustomTableCell align="right">Date</CustomTableCell>
                                <CustomTableCell align="right">View</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.project.map((project) => {
                                return (
                                    <>
                                    <TableRow className={classes.row} key={project.id}>
                                        <CustomTableCell component="th" scope="row">
                                            {project.project_name}
                                        </CustomTableCell>
                                        <CustomTableCell align="right">{project.date}</CustomTableCell>
                                        <CustomTableCell align="right"><Button className={classes.button}>View</Button></CustomTableCell>
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

export default withStyles(styles)(connect(putReduxStateOnProps)(DashboardGrid));

