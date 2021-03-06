import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import projectSaga from './projectSaga';
import createSaga from './createSaga';
import getDetailSaga from './getDetailSaga';
import updateSaga from './updateSaga';
import deleteSaga from './deleteSaga';
import saveImageSaga from './saveImageSaga';
import fetchImageSaga from './fetchImageSaga';
import fetchMaterialSaga from './fetchMaterialSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    projectSaga(),
    createSaga(),
    getDetailSaga(),
    updateSaga(),
    deleteSaga(),
    saveImageSaga(),
    fetchImageSaga(),
    fetchMaterialSaga(),
  ]);
}
