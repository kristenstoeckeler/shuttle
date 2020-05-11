import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "DETAILS" actions
function* fetchMaterial(action) {
    console.log('in fetchMaterial saga', action.payload.id)
    try {
        const response = yield axios.get(`/api/material/${action.payload.id}`)
        yield put({ type: 'MATERIAL_REDUCER', payload: response.data });
    } catch (error) {
        console.log('get Details GET request failed', error);
    }
}

function* fetchMaterialSaga() {
    yield takeLatest('FETCH_MATERIALS', fetchMaterial);
}

export default fetchMaterialSaga;