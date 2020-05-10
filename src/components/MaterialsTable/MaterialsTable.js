import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


//Material UI Imports
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';


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
    typography: {
        margin: theme.spacing.unit * 2,
    },
    root: {
        width: '85%',
        margin: 10,
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
    date: {
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

class MaterialsTable extends Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };


    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_PROJECTS', payload: this.props.user });
    }

    // handleClick = (projectName, projectId) => {
    //     console.log('in handleClick', projectName, projectId);
    //     this.props.dispatch({ type: 'WORKING_REDUCER', payload: projectId })

    //     this.props.history.push(`/draft/${projectId}`)

    // }

    render() {
        const classes = this.props.classes;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow className={classes.row}>
                                <CustomTableCell align="center" className={classes.project}>YARN</CustomTableCell>
                                <CustomTableCell align="center">AMOUNT</CustomTableCell>
                                <CustomTableCell align="center" className={classes.view}>VIEW</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className={classes.row} key={this.props.detail.id}>
                                <CustomTableCell align="center" component="th" scope="row" className={classes.text}>
                                    {this.props.detail.project_name}
                                </CustomTableCell>
                                <CustomTableCell align="center" className={classes.date}>{this.props.detail.date}</CustomTableCell>
                                <CustomTableCell align="center" >
                                    <div>
                                        <Button
                                            aria-owns={open ? 'simple-popper' : undefined}
                                            aria-haspopup="true"
                                            variant="contained"
                                            onClick={this.handleClick}
                                        >
                                            Open Popover
                                        </Button>
                                        <Popover
                                            id="simple-popper"
                                            open={open}
                                            anchorEl={anchorEl}
                                            onClose={this.handleClose}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'center',
                                            }}
                                        >
                                            <Typography className={classes.typography}>The content of the Popover.</Typography>
                                        </Popover>
                                    </div>
                                </CustomTableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>

            </>
        );
    }
}




MaterialsTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

const putReduxStateOnProps = (reduxStore) => ({
    detail: reduxStore.detail,
    user: reduxStore.user,
});

export default withStyles(styles)(withRouter(connect(putReduxStateOnProps)(MaterialsTable)));

