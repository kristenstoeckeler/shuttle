import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PROJECTS" actions
function* updateProject(action) {
    console.log('in updateProject saga', action.payload)
    try {
        yield axios.put(`/api/detail/${action.payload.id}`, action.payload);
        console.log('projects updated!');
        yield put({ type: 'WORKING_REDUCER', payload: action.payload });
    } catch (error) {
        console.log('PUT request failed', error);
    }
}

function* projectSaga() {
    yield takeLatest('UPDATE_PROJECT', updateProject);
}

export default projectSaga;