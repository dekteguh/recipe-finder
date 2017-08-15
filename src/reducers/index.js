import { SET_RECIPES } from '../actions';
import { combineReducers } from 'redux';

const recipes = (state = [], action) => {
    switch (action.type) {
        case SET_RECIPES:
            return action.items;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ recipes });

export default rootReducer;