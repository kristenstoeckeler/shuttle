import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "GET_DETAIL" actions
function* getProjectDetail(action) {
    console.log('in getProjectDetail saga', action.payload.user_id)
    try {
        const response = yield axios.get(`/api/detail/`, action.payload)
        yield put({ type: 'DETAIL_REDUCER', payload: response.data }); 
    } catch (error) {
        console.log('newProject POST request failed', error);
    }
}

function* getDetailSaga(action) {
    yield takeLatest('DETAILS', getProjectDetail);
}

export default getDetailSaga;