import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storage } from '../../Firebase';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import '../Images/Images.css';
import './ImageUpload.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';



import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    button: {
        margin: 5,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
        padding: 5,
        margin: 10,
    },
    input: {
        marginTop: 30,
    },
});


class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0,
            project_id: this.props.match.params
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = (event) => {
        if (event.target.files[0]) {
            const image = event.target.files[0];
            this.setState(() => ({ image }));
        }
    };

    handleUpload = (event) => {
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                //progress function
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
            },
            (error) => {
                //error function
                console.log(error);
            },
            () => {
                //complete function
                storage.ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                        this.setState({ url });
                    })
            });
    }

    saveImage = () => {
        console.log('in saveImage');
        this.props.dispatch({
            type: 'SAVE_IMAGE',
            payload: this.state,
        });

        this.props.dispatch({ type: 'FETCH_IMAGES', payload: this.props.match.params });
    }

    render() {
        const classes = this.props.classes;
        console.log('here is IMAGE UPLOAD state', this.state);
        // const style = {
        //     height: '100vh',
        //     display: 'flex',
        //     flexDirection: 'column',
        //     alignItems: 'center',
        //     justifyContent: 'center'
        // };
        return (
            <>
                <div>
                    <Typography variant="h6">Upload An Image</Typography>
                </div>
                <div>
                    <Input type="file" onChange={this.handleChange} className={classes.input} />
                </div>
                <progress value={this.state.progress} max="100" />
                <div>
                    <Button onClick={this.handleUpload} className={classes.button}>Upload</Button>
                    <Button onClick={this.saveImage} className={classes.button}>Save Image</Button>

                    {/* <img src={this.state.url} alt="Uploaded images" height='400' width='400'/> */}
                </div>

            </>
        );
    }
}
const putReduxStateOnProps = reduxStore => ({
    user: reduxStore.user,
    id: reduxStore.id,
    notes: reduxStore.notes,
    detail: reduxStore.detail,
    images: reduxStore.images,
})
export default withStyles(styles)(withRouter(connect(putReduxStateOnProps)(ImageUpload)));