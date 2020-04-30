import React, { Component } from 'react';
import { connect } from 'react-redux';


import TabMenu from '../TabMenu/TabMenu';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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
    },
    input: {
        backgroundColor: theme.palette.common.white,
        fontSize: 35,
        margin: 4,
        paddingLeft: 10,
    }
}); 


class newProject extends Component {
    
    state = {
        project_name: '',
    }

    handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value;

            this.setState({
                project_name: value
            });
    }

    handleSubmit = () => {
        console.log( 'in handleSubmit');
        this.props.dispatch({
            type: 'CREATE NEW',
            payload: this.state
        })
        
    }

    render(){
        const classes = this.props.classes;
        console.log('here is new state:', this.state);

        return(
            <>
            <header>
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.state.project_name}</h2>
                    <Input
                        className={classes.input}
                        placeholder="Project Title"
                        onChange={event => this.handleChange(event)}
                    ></Input>
                    <Button type="submit" className={classes.button} >Save Project</Button>
                </form>

            </header>
            
            <TabMenu />
            </>
        );
    }
}

export default withStyles(styles)(connect()(newProject));