import { createStore, combineReducers } from 'redux'

import { admReducers, initialState} from './reducer';

const reducers = combineReducers({
    admReducers, initialState
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;