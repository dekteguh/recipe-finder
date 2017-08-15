import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { setRecipes } from '../actions';

class SearchRecipes extends Component {

    constructor() {
        super();
        this.state = {
            ingredients: '',
            dish: ''
        }

        this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
        this.handleChangeDish = this.handleChangeDish.bind(this);
        this.handleClickSubmit = this.handleClickSubmit.bind(this);
    }

    handleChangeIngredients(e) {
        this.setState({
            ingredients: e.target.value
        });
        //console.log('state', this.state);
    }

    handleChangeDish(e) {
        this.setState({
            dish: e.target.value
        });
        //console.log('state', this.state);
    }

    handleClickSubmit(e) {
        let { ingredients, dish } = this.state;
        const URL = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
        //console.log('state', this.state, 'url', URL);

        fetch(URL, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((json) => {
                this.props.setRecipes(json.results);
            })
            .catch((err) => console.log('error', err));
    }

    render() {
        return (
            <Form inline>
                <FormGroup>
                    <ControlLabel>Ingredients</ControlLabel>
                    {' '}
                    <FormControl
                        type="text"
                        placeholder="garlic, chicken"
                        onChange={this.handleChangeIngredients}
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <ControlLabel>Dish</ControlLabel>
                    {' '}
                    <FormControl
                        type="text"
                        placeholder="adobo"
                        onChange={this.handleChangeDish}
                    />
                </FormGroup>
                {' '}
                <Button
                    className="btn btn-success"
                    onClick={this.handleClickSubmit}
                >Submit</Button>
            </Form>
        )
    }
}

export default connect(null,{setRecipes})(SearchRecipes);