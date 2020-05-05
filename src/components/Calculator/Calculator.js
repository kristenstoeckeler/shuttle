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

    state = ({
        id: this.props.detail.id,
        project_name: 'Project Name',
        project_status: false,
        user_id: this.props.user.id,
        finished_length_in: Number(0),
        quantity: Number(0),
        fringe_length_in: Number(0),
        sampling_length_in: Number(0),
        loom_waste_in: Number(24),
        warp_takeup_percent: Number(10),
        length_shrinkage_percent: Number(10),
        finished_width_in: Number(0),
        width_shrinkage_percent: Number(10),
        sett: Number(0),
        extra_ends: Number(0),
        warp_yards_per_lb: Number(0),
        warp_length_in: Number(0),
        weaving_length_tension_in: Number(0),
        weaving_length_relaxed_in: Number(0),
        width_in_reed_in: Number(0),
        warp_ends: Number(0),
        warp_total_yds: Number(0),
        warp_total_oz: Number(0),
        ppi: Number(0),
        weft_takeup_percent: Number(10),
        weft_ypp: Number(0),
        weft_total_yds: Number(0),
        weft_total_oz: Number(0),
    })

    // componentDidMount() {
    //     this.props.dispatch({ type: 'FETCH_PROJECTS', payload: this.state.userId });
    // }

    handleChange = (event, propertyName) => {
        event.preventDefault();

        this.setState({
            [propertyName]: event.target.value,
        });
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
        console.log('here is numberOfEnds', numberOfEnds);

        const totalInches = 
            totalLengthInches * numberOfEnds;
        console.log('here is totalInches', totalInches);

        const totalYards = Math.round((totalInches / 36) *100) / 100;
        console.log('here is totalYards', totalYards);

        this.props.dispatch({
            type: 'UPDATE_PROJECT', 
            payload: {
                ...this.state, warp_length_in: totalInches,
                width_in_reed_in: totalWidthInches,
                warp_ends: numberOfEnds,
                warp_total_yds: totalYards
            }
        });

        this.setState({
            warp_length_in: totalInches,
            width_in_reed_in: totalWidthInches,
            warp_ends: numberOfEnds,
            warp_total_yds: totalYards,
        });
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
                            type="Number"
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
                            type="Number"
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
                            type="number"
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
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <h3>Warp Calculations</h3>
                        <ul>
                            <li>Total warp (yards): {this.props.detail.warp_total_yds} yards</li>
                            <li>Total warp (ounces): {this.props.detail.warp_total_oz} yards</li>
                        </ul>
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
    detail: reduxStore.detail,
    working: reduxStore.working,
})

export default withStyles(styles)(connect(putReduxStateOnProps)(Calculator));