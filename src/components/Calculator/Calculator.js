import React, { Component } from 'react';
import { connect } from 'react-redux';


import TabMenu from '../TabMenu/TabMenu';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';




const styles = theme => ({
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
    }
});


class Calculator extends Component {

    state = {
        project_name: 'Project Name',
        project_status: false,
        user_id: this.props.user.id,
    }

    handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value;

        this.setState({
            project_name: value,
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

    changeStatus = () => {
        console.log('in changeStatus');
        this.setState({
            project_status: false,
        })
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    className={this.props.classes.input}
                    value={this.state.project_name}
                    onChange={event => this.handleChange(event)}
                    defaultValue={this.state.project_name}
                ></TextField>
            </form>
        );
    }

    render() {
        const classes = this.props.classes;
        console.log('here is new state:', this.state);

        return (
            <>
                <header>
                    <Button type="submit" onClick={this.handleSubmit} className={classes.button}>Save Project</Button>
                    <div>
                        {this.state.project_status ?
                            <>
                                <Typography className={classes.typography} onClick={this.changeStatus}>{this.state.project_name}</Typography>
                            </>

                            :
                            <form onSubmit={this.handleSubmit}>
                                <Input
                                    className={classes.input}
                                    placeholder={this.state.project_name}
                                    onChange={event => this.handleChange(event)}
                                ></Input>
                            </form>
                        }
                    </div>
                </header>

                <TabMenu />
            </>
        );
    }
}

const putReduxStateOnProps = reduxStore => ({
    user: reduxStore.user,
})

export default withStyles(styles)(connect(putReduxStateOnProps)(Calculator));