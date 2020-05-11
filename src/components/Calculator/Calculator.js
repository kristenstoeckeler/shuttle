import React, { Component } from 'react';
import { connect } from 'react-redux';

//withRouter allows Calculator to access match.params
import { withRouter } from 'react-router';

//imports for Material UI styling
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

//importing ParamsCard component
import ParamsCard from '../ParamsCard/ParamsCard';

//declaring style properties
const styles = theme => ({
    root: {
        flexGrow: 1,
        marginLeft: 50,
    },
    button: {
        margin: 5,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
    },
    input: {
        backgroundColor: theme.palette.common.white,
        fontSize: 35,
        margin: 4,
        paddingLeft: 10,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        margin: 3,
    },
});


class Calculator extends Component {

    //setting state, grabbing match.params through router for GET route based on project ID
    //most of state is set from DETAIL reducer
    state = ({
        id: this.props.match.params,
        project_status: false,
        user_id: this.props.user.id,
        finished_length_in: this.props.detail.finished_length_in,
        quantity: this.props.detail.quantity,
        fringe_length_in: this.props.detail.fringe_length_in,
        sampling_length_in: this.props.detail.sampling_length_in,
        loom_waste_in: this.props.detail.loom_waste_in,
        warp_takeup_percent: this.props.detail.warp_takeup_percent,
        length_shrinkage_percent: this.props.detail.length_shrinkage_percent,
        finished_width_in: this.props.detail.finished_width_in,
        width_shrinkage_percent: this.props.detail.width_shrinkage_percent,
        sett: this.props.detail.sett,
        extra_ends: this.props.detail.extra_ends,
        warp_yards_per_lb: this.props.detail.warp_yards_per_lb,
        warp_length_in: this.props.detail.warp_length_in,
        weaving_length_tension_in: this.props.detail.weaving_length_tension_in,
        weaving_length_relaxed_in: this.props.detail.weaving_length_relaxed_in,
        width_in_reed_in: this.props.detail.width_in_reed_in,
        warp_ends: this.props.detail.warp_ends,
        warp_total_yds: this.props.detail.warp_total_yds,
        warp_total_oz: this.props.detail.warp_total_oz,
        ppi: this.props.detail.ppi,
        weft_takeup_percent: this.props.detail.weft_takeup_percent,
        weft_ypp: this.props.detail.weft_ypp,
        weft_total_yds: this.props.detail.weft_total_yds,
        weft_total_oz: this.props.detail.weft_total_oz,
    })

    //changes state based on Calculator input values
    handleChange = (event, propertyName) => {
        event.preventDefault();

        this.setState({
            [propertyName]: event.target.value,
        });
    }//end handleChange

    //calculates yarn needs based on Calculator input values
    handleClick = () => {
        
        const weavingLength = Number(this.state.finished_length_in) + Number(this.state.sampling_length_in);
        const takeupFactorLength = weavingLength / Number(this.state.warp_takeup_percent);
        const subTotalLengthInches = weavingLength + takeupFactorLength + Number(this.state.fringe_length_in) 
        const totalLengthInches = subTotalLengthInches * Number(this.state.quantity) + Number(this.state.loom_waste_in);

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

        //sends newly calculated state property values to Detail reducer
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

        //updates state with newly calculated state property values. 
        this.setState({
            warp_length_in: totalInches,
            width_in_reed_in: totalWidthInches,
            warp_ends: numberOfEnds,
            warp_total_yds: totalYards,
        });
    }//end handleClick

    //secret button is for presentation of application to fill calculator with pre-existing values
    //allowing conditional render by changing state.project_status
    //FUTURE: will use this to turn into a permanent app feature for ease of use.
    secretButton = () => {
        this.setState({
            project_status: !this.state.project_status,
        })
    }//end secretButton


    render() {
        //applying style properties to props
        const classes = this.props.classes;

        //conditionally rendering calculator based on click of secret button
        //some elements below are commented out
        //FUTURE: separate "warp" calculator out
        return (
            <> 
            {this.state.project_status ? 
                    <div className={classes.root}>
                        <Grid container direction="row" alignItems="center" spacing={3}>

                            <Grid item className={classes.header}>
                                <h3 onClick={this.secretButton}>Warp Calculator</h3>
                            </Grid>
                            {/* <Grid item xs={12} sm={6} className={classes.flo}>
                        <h3 >Weft Calculator</h3>
                    </Grid> */}
                        </Grid>
                        <Grid container direction="row" alignItems="center">
                            <Grid item>
                                <TextField
                                    id="outlined-with-placeholder"
                                    defaultValue = {this.state.finished_length_in}
                                    placeholder = {this.state.finished_length_in}
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
                                    defaultValue={this.state.quantity}
                                    placeholder={this.state.quantity}
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
                                    defaultValue={this.state.fringe_length_in}
                                    placeholder={this.state.fringe_length_in}
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
                                    defaultValue={this.state.sampling_length_in}
                                    placeholder={this.state.sampling_length_in}
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
                                    defaultValue={this.state.loom_waste_in}
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
                                    defaultValue={this.state.warp_takeup_percent}
                                    placeholder={this.state.warp_takeup_percent}
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
                                    defaultValue={this.state.length_shrinkage_percent}
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
                                    defaultValue={this.state.finished_width_in}
                                    placeholder={this.state.finished_width_in}
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
                                    defaultValue={this.state.width_shrinkage_percent}
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
                                    defaultValue={this.state.sett}
                                    placeholder={this.state.sett}
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
                                    defaultValue={this.state.extra_ends}
                                    placeholder={this.state.extra_ends}
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
                                    defaultValue={this.state.warp_yards_per_lb}
                                    placeholder={this.state.warp_yards_per_lb}
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
                                >Calculate</Button>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center">
                            <Grid item>
                                <ParamsCard />
                            </Grid>
                        </Grid>
                    </div>
            :
            <div className={classes.root}>
                <Grid container direction="row" alignItems="center" spacing={3}>

                    <Grid item className={classes.header}>
                        <h3 onClick={this.secretButton}>Warp Calculator</h3>  
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
                            placeholder="24"
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
                            placeholder="10"
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
                            placeholder="10"
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
                            placeholder="10"
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
                     >Calculate</Button>
                    </Grid>
                </Grid>  
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <ParamsCard />
                    </Grid>
                </Grid>
            </div>
            }
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
})

export default withStyles(styles)(withRouter(connect(putReduxStateOnProps)(Calculator)));