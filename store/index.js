import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './rootSaga';
import comment from './comment/reducer';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();

// ______________________ REDUCERS ______________

const reducers = combineReducers({

  comment,
});

// ______________________ REDUCERS END ______________

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
