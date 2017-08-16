import React, { Component } from 'react';

import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import FavoriteRecipeList from './FavoriteRecipeList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>Recipe Finder</h2>
                <SearchRecipes />
                <RecipeList />
                <FavoriteRecipeList />
            </div>    
        )
    }
}

export default App;