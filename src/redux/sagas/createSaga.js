import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "CREATE_PROJECTS" actions
function* newProject(action) {
    console.log('in createProject saga', action.payload.user_id)
    try {
        yield axios.post(`/api/project/`, action.payload)
        // yield put({type: 'DETAILS'}); //will need payload?
    } catch (error) {
        console.log('newProject POST request failed', error);
    }
}

function* createSaga(action) {
    yield takeLatest('CREATE_NEW', newProject);
}

export default createSaga;