/*
This is a functional component which does  description
*/
import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
            .map(igkey => {
                return [...Array(props.ingredients[igkey])].map((_, i) => {
                    return <BurgerIngredient type={igkey} key={igkey+i} />
                });
            })
            .reduce((arr, el) => {
                return arr.concat(el)
            }, []);

    

    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;