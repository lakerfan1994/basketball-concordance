import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import nbaReducer from  './reducers/index';

export default createStore(
    combineReducers({
        form: formReducer,
        nba: nbaReducer

    })
);
