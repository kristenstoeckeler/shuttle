import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* saveImage(action) {
    console.log('in saveImage saga', action.payload)
    try {
        yield axios.post(`/api/image/`, action.payload);
    } catch (error) {
        console.log('PUT request failed', error);
    }
}

function* saveImageSaga(action) {
    yield takeLatest('SAVE_IMAGE', saveImage);
}

export default saveImageSaga;