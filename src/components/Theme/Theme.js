// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';

// import rootReducer from './redux/reducers'; // imports ./redux/reducers/index.js
// import rootSaga from './redux/sagas'; // imports ./redux/sagas/index.js

// //Material UI imports
// import { ThemeProvider } from '@material-ui/core/styles';
// import { createMuiTheme } from '@material-ui/core/styles';
// import lime from '@material-ui/core/colors/lime';
// import red from '@material-ui/core/colors/red';


// import App from './components/App/App';

// const theme = createMuiTheme({
//     palette: {
//         primary: { main: red[400] },
//         secondary: { main: lime[500] },
//         error: red,
//         contrastThreshold: 3,
//         tonalOffset: 0.2,
//     },
//     typography: {
//         fontSize: 16
//     }
// });


// const sagaMiddleware = createSagaMiddleware();

// // this line creates an array of all of redux middleware you want to use
// // we don't want a whole ton of console logs in our production code
// // logger will only be added to your project if your in development mode
// const middlewareList = process.env.NODE_ENV === 'development' ?
//     [sagaMiddleware, logger] :
//     [sagaMiddleware];

// const store = createStore(
//     // tells the saga middleware to use the rootReducer
//     // rootSaga contains all of our other reducers
//     rootReducer,
//     // adds all middleware to our project including saga and logger
//     applyMiddleware(...middlewareList),
// );

// export default theme; 