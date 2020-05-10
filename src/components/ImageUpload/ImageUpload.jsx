import React, {Component} from 'react';
import { connect } from 'react-redux';
import {storage} from '../../Firebase';
import { withStyles } from '@material-ui/core/styles';


class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0,
            project_id: this.props.detail.id
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_IMAGES', payload: this.state.project_id });
    }

    handleChange = (event) => {
        if(event.target.files[0]){
            const image = event.target.files[0];
            this.setState(() => ({image}));
        }
    }

    handleUpload = (event) => {
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            //progress function
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress});
        },
        (error) => {
            //error function
            console.log(error);
        },
        () => {
            //complete function
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url});
            })
        });
    }

    saveImage = () => {
        console.log('in saveImage');
        this.props.dispatch({
            type: 'SAVE_IMAGE',
            payload: this.state,
        });
    }

    render() {
        console.log( 'here is IMAGE UPLOAD state', this. state);
        // const style = {
        //     height: '100vh',
        //     display: 'flex',
        //     flexDirection: 'column',
        //     alignItems: 'center',
        //     justifyContent: 'center'
        // };
        return(
            <>
            <div>
            {/* <div style={style}> */}
            <progress value={this.state.progress} max="100"/>
            <br/>
                <input type="file" onChange={this.handleChange}/>
                <button onClick={this.handleUpload}>Upload</button>
                <button onClick={this.saveImage}>Save Image</button>
                <br/>
                <img src={this.state.url} alt="Uploaded images"/>
            </div>
            <div>
                <h5>Here are photos from DB</h5>
                {this.props.images.map((image) => {
                    return(
                        <>
                        <li><img src={image.location}/></li>
                        </>
                    );
                })}
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

export default withStyles()(connect(putReduxStateOnProps)(ImageUpload));
