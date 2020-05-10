import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchImage(action) {
    console.log('in fetchImage saga', action.payload)
    try {
        const response = yield axios.get(`/api/image/${action.payload}`);
        yield put({ type: 'IMAGES', payload: response.data })
    } catch (error) {
        console.log('GET request failed', error);
    }
}

function* fetchImageSaga() {
    yield takeLatest('FETCH_IMAGES', fetchImage);
}

export default fetchImageSaga;