import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PROJECTS" actions
function* newProject(action) {
    console.log('in createProjec saga', action.payload)
    try {
        yield axios.post(`/api/project/`, action.payload)
        yield put({type: 'DETAILS'}); //will need payload?
    } catch (error) {
        console.log('newProject POST request failed', error);
    }
}

function* createSaga(action) {
    yield takeLatest('CREATE_PROJECT', newProject);
}

export default createSaga;