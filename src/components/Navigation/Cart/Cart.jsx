import React from 'react';
import * as classes from './Cart.module.scss';
import {Link} from 'react-router-dom';
import {MdShoppingCart} from 'react-icons/md';

const cart = () => {
    return (
        <Link to="/cart" className={classes.Button}>
            <MdShoppingCart />
        </Link>
    )
}

export default cart;