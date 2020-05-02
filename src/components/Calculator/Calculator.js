import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';


import TabMenu from '../TabMenu/TabMenu';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';


import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';





const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    button: {
        margin: 5,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
        position: 'right',
    },
    input: {
        backgroundColor: theme.palette.common.white,
        fontSize: 35,
        margin: 4,
        paddingLeft: 10,
    },
    typography: {
        fontSize: 35,
        margin: 4,
        paddingLeft: 10,
    },
    textField: {
        margin: 3,
    }
    // float: {
    //     position: 'bottom',
    // }
});


class Calculator extends Component {

    state = {
        project_name: 'Project Name',
        project_status: false,
        user_id: this.props.user.id,
        finished_length_in: 0,
        quantity: 0,
        fringe_length_in: 0,
        sampling_length_in: 0,
        loom_waste_in: 24,
        warp_takeup_percent: 10,
        length_shrinkage_percent: 10,
        finished_width_in: 0,
        width_shrinkage_percent: 10,
        sett: 0,
        extra_ends: 0,
        warp_yards_per_lb: 0,
        warp_length_in: 0,
        weaving_length_tension_in: 0,
        weaving_length_relaxed_in: 0,
        width_in_reed_in: 0,
        warp_ends: 0,
        warp_total_yds: 0,
        warp_total_oz: 0,
        ppi: 0,
        weft_takeup_percent: 10,
        weft_ypp: 0,
        weft_total_yds: 0,
        weft_total_oz: 0,

    }

    handleChange = (event, propertyName) => {
        event.preventDefault();

        this.setState({
            [propertyName]: event.target.value,
        });
    }

    handleSubmit = () => {
        console.log('in handleSubmit');
        this.setState({
            project_status: true,
        })

        this.props.dispatch({
            type: 'CREATE_NEW',
            payload: this.state
        })
    }

    handleClick = () => {
        console.log('in handleClick to CALCULATE');
        
        const weavingLength = Number(this.state.finished_length_in) + Number(this.state.sampling_length_in);
        const takeupFactorLength = weavingLength / Number(this.state.warp_takeup_percent);
        const totalLengthInches = weavingLength + takeupFactorLength + Number(this.state.fringe_length_in) + Number(this.state.loom_waste_in);

        const takeupFactorWidth = Number(this.state.finished_width_in) / Number(this.state.width_shrinkage_percent);
        const totalWidthInches = Number(this.state.finished_width_in) + takeupFactorWidth;
        
        const numberOfEnds =
             totalWidthInches * Number(this.state.sett) + Number(this.state.extra_ends);
        
        const totalYardage = 
            totalLengthInches * numberOfEnds

        console.log( 'here is total warp yardage', totalYardage);
       
        // quantity: 0,
   
             
               
        //                 warp_takeup_percent: 10,
        //                     length_shrinkage_percent: 10,
        //                             width_shrinkage_percent: 10,
        //                                         warp_yards_per_lb: 0,

    }

    changeStatus = () => {
        console.log('in changeStatus');
        this.setState({
            project_status: false,
        })
        // return (
        //     <form onSubmit={this.handleSubmit}>
        //         <TextField
        //             className={this.props.classes.input}
        //             value={this.state.weft_total_oz}
        //             onChange={event => this.handleChange(event)}
        //             defaultValue={this.state.project_name}
        //         ></TextField>
        //     </form>
        // );
    }

    render() {
        const classes = this.props.classes;
        console.log('here is new state:', this.state);

        return (
            <>
                <Grid container direction="row" alignItems="center">
                    <Grid item >
                        <TextField
                            id="outlined-with-placeholder"
                            label="finished length of piece"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            size="small"
                            onChange={event => this.handleChange(event, 'finished_length_in')}
                        />
                    </Grid>
                    <Grid item>
                        <Typography className="float">inches (include hems)</Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <TextField
                            id="outlined-with-placeholder"
                            label="quantity"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            size="small"
                            onChange={event => this.handleChange(event, 'quantity')}
                        />
                    </Grid>
                    <Grid item>
                        <Typography className="float">number of items</Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <TextField
                            id="outlined-with-placeholder"
                            label="fringe length"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            size="small"
                            onChange={event => this.handleChange(event, 'fringe_length_in')}
                        />
                    </Grid>
                    <Grid item>
                        <Typography className="float" size="small">inches</Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <TextField
                            id="outlined-with-placeholder"
                            label="sampling length"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            size="small"
                            onChange={event => this.handleChange(event, 'sampling_length_in')}
                        />
                    </Grid>
                    <Grid item>
                        <Typography className="float" size="small">inches</Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <TextField
                            id="outlined-with-placeholder"
                            label="loom waste"
                            placeholder={this.state.loom_waste_in}
                            // defaultValue={this.state.loom_waste_in}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            size="small"
                            onChange={event => this.handleChange(event, 'loom_waste_in')}
                        />
                    </Grid>
                    <Grid item>
                        <Typography className="float" size="small">inches</Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <TextField
                            id="outlined-with-placeholder"
                            label="takeup"
                            placeholder={this.state.warp_takeup_percent}
                            // defaultValue={this.warp_takeup_percent}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            size="small"
                            onChange={event => this.handleChange(event, 'warp_takeup_percent')}
                        />
                    </Grid>
                    <Grid item>
                        <Typography className="float" size="small">%</Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <TextField
                            id="outlined-with-placeholder"
                            label="length shrinkage"
                            placeholder={this.state.length_shrinkage_percent}
                            // defaultValue={this.warp_takeup_percent}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            size="small"
                            onChange={event => this.handleChange(event, 'length_shrinkage_percent')}
                        />
                    </Grid>
                    <Grid item>
                        <Typography className="float" size="small">%</Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <TextField
                            id="outlined-with-placeholder"
                            label="finished width of piece"
                            // defaultValue={this.warp_takeup_percent}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            size="small"
                            onChange={event => this.handleChange(event, 'finished_width_in')}
                        />
                    </Grid>
                    <Grid item>
                        <Typography className="float" size="small">inches</Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <TextField
                            id="outlined-with-placeholder"
                            label="width shrinkage"
                            placeholder={this.state.width_shrinkage_percent}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            size="small"
                            onChange={event => this.handleChange(event, 'width_shrinkage_percent')}
                        />
                    </Grid>
                    <Grid item>
                        <Typography className="float" size="small">%</Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <TextField
                            id="outlined-with-placeholder"
                            label="sett"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            size="small"
                            onChange={event => this.handleChange(event, 'sett')}
                        />
                    </Grid>
                    <Grid item>
                        <Typography className="float" size="small">epi (ends per inch)</Typography>
                    </Grid>
                </Grid>      
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <TextField
                            id="outlined-with-placeholder"
                            label="extra ends"
                            // defaultValue={this.warp_takeup_percent}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            size="small"
                            onChange={event => this.handleChange(event, 'extra_ends')}
                        />
                    </Grid>
                    <Grid item>
                        <Typography className="float" size="small">no. ends (selvedges)</Typography>
                    </Grid>
                </Grid>          
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <TextField
                            id="outlined-with-placeholder"
                            label="yards per lb."
                            placeholder={this.state.sett}
                            // defaultValue={this.warp_takeup_percent}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            size="small"
                            onChange={event => this.handleChange(event, 'warp_yards_per_lb')}
                        />
                    </Grid>
                    <Grid item>
                        <Typography className="float" size="small">ypp (yards per lb.)</Typography>
                    </Grid>
                </Grid>          
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                     <Button
                            className={classes.button}
                            onClick={() => this.handleClick()}
                     >Calculate Warp</Button>
                    </Grid>
                </Grid>          
            </>
        );
    }
}

Calculator.propTypes = {
    classes: PropTypes.object.isRequired,
};

const putReduxStateOnProps = reduxStore => ({
    user: reduxStore.user,
})

export default withStyles(styles)(connect(putReduxStateOnProps)(Calculator));