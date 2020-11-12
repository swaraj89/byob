import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICES = {
    salad: 20,
    bacon: 30,
    meat: 70,
    cheese: 30
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 40,
        purchasable: false
    }

    updatePurchaseState(){
        const ingredients = {
            ...this.state.ingredients
        };

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce( (prev, el) => {
                return prev+el;
            } , 0)

        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients},() => {
            this.updatePurchaseState()
        });
    }
    
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        
        if(oldCount <= 0){
            return 0;
        }
        
        const updatedCount = oldCount - 1;
        
        const updatedIngredients = {
            ...this.state.ingredients
        };
        
        updatedIngredients[type] = updatedCount;
        
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients}, () => {
            this.updatePurchaseState()
        });
    }

    render(){

        const disabledInfo = {
            ...this.state.ingredients
        };

        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
        <Aux>
            <Modal>test modal</Modal>
            <Burger ingredients={ this.state.ingredients }></Burger>
            <BuildControls 
                ingredientAdded = { this.addIngredientHandler }
                ingredientRemoved = { this.removeIngredientHandler }
                disabledInfo={ disabledInfo }
                price={ this.state.totalPrice }
                purchasable= { this.state.purchasable }/>
        </Aux>);
    }
}

export default BurgerBuilder;