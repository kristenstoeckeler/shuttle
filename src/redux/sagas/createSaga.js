import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "CREATE_PROJECTS" actions
function* newProject(action) {
    console.log('in createProject saga', action.payload)
    try {
        const response = yield axios.post(`/api/project/`, action.payload)
        console.log(' here is response.data', response.data);
        // yield put({type: 'DETAILS', payload: response.data});
        action.payload.history.push(`/draft/${response.data.id}`)
    } catch (error) {
        console.log('newProject POST request failed', error);
    }
}

function* createSaga(action) {
    yield takeLatest('CREATE_NEW', newProject);
}

export default createSaga;