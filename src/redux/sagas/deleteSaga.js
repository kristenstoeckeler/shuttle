import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "CREATE_PROJECTS" actions
function* deleteProject(action) {
    console.log('in deleteProject saga', action.payload)
    try {
        yield axios.delete(`/api/project/${action.payload}`);
    } catch (error) {
        console.log('DELETE project request failed', error);
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE', deleteProject);
}

export default deleteSaga;