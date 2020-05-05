// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import PropTypes from 'prop-types';
// import TabMenu from '../TabMenu/TabMenu';
// import Input from '@material-ui/core/Input';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';


// const styles = theme => ({
//     root: {
//         flexGrow: 1,
//     },
//     grow: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginLeft: -12,
//         marginRight: 20,
//     },
//     button: {
//         margin: 5,
//         backgroundColor: theme.palette.secondary.dark,
//         color: theme.palette.common.white,
//         position: 'right',
//     },
//     input: {
//         backgroundColor: theme.palette.common.white,
//         fontSize: 35,
//         margin: 4,
//         paddingLeft: 10,
//     },
//     typography: {
//         fontSize: 35,
//         margin: 4,
//         paddingLeft: 10,
//     }
// });


// class SaveButton extends Component {

//     // handleSubmit = () => {
//     //     console.log('in handleSubmit. Here is detail reducer', this.props.detail);


        
//     // }

//     render() {
//         const classes = this.props.classes;
//         // console.log('here is new state:', this.props.detail);


//         return (
//             <>
//                     <Grid align-items-xs-right justify-xs-flex-end>
//                         <Button type="submit" onClick={this.handleSubmit} className={classes.button}>Save Project</Button>
//                     </Grid>
//             </>
//         );
//     }
// }

// SaveButton.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// const putReduxStateOnProps = reduxStore => ({
//     user: reduxStore.user,
//     detail: reduxStore.detail,
// })

// export default withStyles(styles)(connect(putReduxStateOnProps)(SaveButton));