// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import SaveButton from '../SaveButton/SaveButton';
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


// class newProject extends Component {
    
//     state = {
//         project_name: 'Project Name',
//     }

//     handleChange = (event) => {
//         console.log('in handleChange', event.target.value);
//         this.props.dispatch({
//             type: 'DETAIL_REDUCER',
//             payload: event.target.value,
//         });
//     }

//     render() {
//         const classes = this.props.classes;
//         console.log('here is new state:', this.props.detail);

//         return (
//             <>
//                 <header>
//                     <SaveButton />
//                     <div>
//                         <form onSubmit={this.handleSubmit}>
//                             <TextField
//                                 className={classes.input}
//                                 placeholder={this.state.project_name}
//                                 onChange={event => this.handleChange(event)}
//                             ></TextField>
//                         </form>
//                     </div>
//                 </header>
//                 <TabMenu />
//             </>
//         );
//     }
// }

// const putReduxStateOnProps = reduxStore => ({
//     user: reduxStore.user,
//     detail: reduxStore.detail,
// })

// export default withStyles(styles)(connect(putReduxStateOnProps)(newProject));