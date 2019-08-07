import React from 'react';
import * as classes from './ProductsCollections.module.scss';
import ProductCollection  from './ProductCollection/ProductCollection';
import {ProductsCollections} from '../../Data';
const productCollections = (props) => {
    return(
        <div className="container">
            <section className={classes.ProductsCollections}>
                {
                    ProductsCollections.map(product=>{
                        return <ProductCollection {...product} />
                    })
                }
            </section>
        </div>
    )
}

export default productCollections;