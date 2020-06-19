import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';




const styles = theme => ({
    button: {
        margin: 20,
        color: theme.palette.primary.light,
        backgroundColor: theme.palette.common.white,
        padding: 5,
        margin: 10,
    },
    input: {
        marginTop: 30,
    },
    type: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.palette.common.black,
    },
});

class AlertDialog extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const classes = this.props.classes;

        return (
            <div>
                <div>
                    <Typography className={classes.type}>
                        Digital Draft Tool Coming Soon!
                    </Typography>
                    <Button className={classes.button} onClick={this.handleClickOpen}>
                        Click to Learn More
                    </Button>
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"What's a Draft?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            A draft is a pattern for handweavers. Each square in the L-shaped grid represents a potential
                            intersection of a thread with the loom - where the thread and the loom could connect.
                            Different parts of the loom interact with each thread differently, so each distinct section of 
                            the L-shaped grid indicates either the shafts, heddles, or treadles of the loom. If a square is shaded
                            in, it means the that is a point of contact between a specific thread and a specific part of the loom.
                            <br/>
                            <br />
                            The Digital Draft tool is currently being developed. Users will be able to select individual 
                            squares in the grid to create a unique weaving pattern. Stay tuned!
            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cool, Kristen!
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

AlertDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlertDialog);