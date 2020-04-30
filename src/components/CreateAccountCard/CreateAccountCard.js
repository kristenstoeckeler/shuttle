import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        minWidth: 275,
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        margin: 30,
        maxWidth: 300,
        backgroundColor: "secondary",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        marginTop: 15,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
    }
});

class CreateAccountCard extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    };

    registerUser = (event) => {
        event.preventDefault();

        if (this.state.username && this.state.password) {
            this.props.dispatch({
                type: 'REGISTER',
                payload: {
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                },
            });
        } else {
            this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
            alert( this.props.registrationMessage )
        }
    } // end registerUser

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    render(){
    const classes = this.props.classes;
    return (
        <>
        <Card className={classes.card} background-color="secondary">
            <CardContent>
                <form onSubmit={this.registerUser}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Sign Me Up!
                    </Typography>
                    <div>
                        <Input
                            placeholder="username"
                            className="input"
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChangeFor('username')}>
                        </Input>

                    </div>
                    <div>
                        <Input
                            placeholder="email"
                            className="input"
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChangeFor('email')}>
                        </Input>

                    </div>
                    <div>
                        <Input
                            placeholder="password"
                            className="input"
                            type="text"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChangeFor('password')}>
                        </Input>
                    </div>
                    <div>
                        <Button className={classes.button} type="submit">Create Account</Button>
                    </div>
                </form>
                <div>
                </div>
            </CardContent>        
        </Card>
        </>
    );
}
}

CreateAccountCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    errors: state.errors,
});

export default withStyles(styles)(connect(mapStateToProps)(CreateAccountCard));