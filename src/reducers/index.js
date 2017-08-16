import { SET_RECIPES, FAVORITE_RECIPE } from '../actions';
import { combineReducers } from 'redux';

const recipes = (state = [], action) => {
    switch (action.type) {
        case SET_RECIPES:
            return action.items;
        default:
            return state;
    }
}

const favoriteRecipes = (state = [], action) => {
    switch (action.type) {
        case FAVORITE_RECIPE:
            state = [...state, action.recipe];
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ recipes, favoriteRecipes });

export default rootReducer;