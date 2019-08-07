import React from 'react';
import * as classes from './ProductCollection.module.scss';
import {Link} from 'react-router-dom';
const product = (props) => {
    return(
        <section className={classes.ProductCollection}>
            <img src={props.source} alt={props.title} />
            <div className={classes.Overlay}>
                <h4>{props.title}</h4>
                <Link to={props.Link}>Shop Now</Link>
            </div>
        </section>
    )
}

export default product;