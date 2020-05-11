import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';


import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import '../Images/Images.css';
import Images from '../Images/Images';
import ImageUpload from '../ImageUpload/ImageUpload';




class PhotosTab extends Component {

    render() {
        const classes = this.props.classes;
        return (
            <>
            <Images/>
            <ImageUpload/>
            </>
        );
    }
}


PhotosTab.propTypes = {
    classes: PropTypes.object.isRequired,
};

const putReduxStateOnProps = reduxStore => ({
    user: reduxStore.user,
    detail: reduxStore.detail,
    images: reduxStore.images,

})

export default withStyles()(connect(putReduxStateOnProps)(PhotosTab));