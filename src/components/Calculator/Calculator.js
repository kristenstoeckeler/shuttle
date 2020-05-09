import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

import ParamsCard from '../ParamsCard/ParamsCard';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    weft: {
        // marginLeft: 250,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    root: {
        flexGrow: 1,
        marginLeft: 50,
    },
    grow: {
        flexGrow: 1,
    },
    h2: {
        fontSize: 3
    },
    grid: {
        margin: 20,
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
    floatButton: {
        // marginLeft: 200,
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
    },
    float: {
        marginRight: 200,
        fontWeight: '500',
        fontSize: 14,
        padding: 20,
    },
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
            ...this.state,
            [propertyName]: event.target.value,
        });
    }

    handleClickWeft = () => {
        console.log('in handleClickWeft')
    }


    handleClick = () => {
        // console.log('in handleClick to CALCULATE');
        
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
    
        console.log('here is this.state.projectDetails', this.state)

        this.props.dispatch({
            type: 'DETAIL_REDUCER', 
            payload: {
                ...this.state,
                    warp_length_in: totalInches,
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
            <div className={classes.root}>
                <Grid container direction="row" alignItems="center" spacing={3}>

                    <Grid item className={classes.header}>
                        <h3>Warp Calculator</h3>  
                    </Grid>
                    {/* <Grid item xs={12} sm={6} className={classes.flo}>
                        <h3 >Weft Calculator</h3>
                    </Grid> */}
                </Grid>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <TextField
                            id="outlined-with-placeholder"
                            label="finished length"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            size="small"
                            type="Number"
                            onChange={event => this.handleChange(event, 'finished_length_in')}
                        />
                    </Grid>
                    
                    <Grid item>
                        <Typography className="float" xs={6} sm={3}>inches (include hems)</Typography>
                    </Grid>
                </Grid>

                    {/* <Grid item xs={6} sm={3}>
                        <TextField
                            id="outlined-with-placeholder"
                            label="ppi"
                            className={classes.weft}
                            margin="normal"
                            variant="outlined"
                            size="small"
                            type="Number"
                            onChange={event => this.handleChange(event, 'ppi')}
                        />
                    </Grid> */}
                    {/* <Grid item xs={6} sm={3}>
                        <Typography className="float">picks per inch</Typography>
                    </Grid> */}
                
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
                    {/* <Grid item xs={6} sm={3}>
                        <TextField
                            id="outlined-with-placeholder"
                            label="takeup"
                            className={classes.weft}
                            margin="normal"
                            variant="outlined"
                            size="small"
                            type="Number"
                            onChange={event => this.handleChange(event, 'weft_takeup_percent')}
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Typography className="float">%</Typography>
                    </Grid> */}
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
                    {/* <Grid item xs={6} sm={3}>
                        <TextField
                            id="outlined-with-placeholder"
                            label="yards per lb."
                            className={classes.weft}
                            margin="normal"
                            variant="outlined"
                            size="small"
                            type="Number"
                            onChange={event => this.handleChange(event, 'weft_ypp')}
                        />
                    </Grid>
                    <Grid item>
                        <Typography className="float" xs={6} sm={3}>ypp (yards per lb.)</Typography>
                    </Grid> */}
                </Grid>
                <Grid container direction="row" alignItems="center">
                    <Grid item >
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
                    {/* <Grid item xs={6} sm={3}>
                        <Button
                            className={classes.floatButton}
                            onClick={() => this.handleClickWeft()}
                        >Calculate Weft</Button>
                    </Grid> */}
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
                        <ParamsCard />
                    </Grid>
                </Grid>
            </div>
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