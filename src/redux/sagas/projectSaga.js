import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PROJECTS" actions
function* fetchProject(action) {
    try{
        const response = yield axios.get(`/api/project/`)
        yield put({ type: 'SET_PROJECT', payload: response.data });
    } catch (error) {
        console.log('Projects GET request failed', error);
    }
}

function* projectSaga(action) {
    yield takeLatest('FETCH_PROJECTS', fetchProject);
}

export default projectSaga;