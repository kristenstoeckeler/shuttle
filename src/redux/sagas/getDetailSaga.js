import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "DETAILS" actions
function* getProjectDetail(action) {
    console.log('in getProjectDetail saga', action.payload.id)
    try {
        const response = yield axios.get(`/api/detail/${action.payload.id}`)
        yield put({ type: 'DETAIL_REDUCER', payload: response.data }); 
    } catch (error) {
        console.log('get Details GET request failed', error);
    }
}

function* getDetailSaga() {
    yield takeLatest('DETAILS', getProjectDetail);
}

export default getDetailSaga;