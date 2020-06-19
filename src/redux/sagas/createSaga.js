import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "CREATE_PROJECTS" actions
function* newProject(action) {
    try {
        const response = yield axios.post(`/api/project/`, action.payload)
        yield put({type: 'ID', payload: response.data});
        action.payload.history.push(`/draft/${response.data.id}`)
    } catch (error) {
        console.log('newProject POST request failed', error);
    }
}

function* createSaga(action) {
    yield takeLatest('CREATE_NEW', newProject);
}

export default createSaga;