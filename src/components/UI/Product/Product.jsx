import React, {Component} from 'react';
import * as classes from './Product.module.scss';
import Button from '../Button/Button'

const product = (props) => {
    return(
        <section className={classes.Product}>
            {
                this.props.sale?
                    <div className={classes.Sale}>
                        <p>Sale <span>{props.sale}</span></p>
                    </div>
                :null
            }
            <div className={classes.ProductDetails}>
                <img src={props.source} alt={props.productName} />
                <div className={props.Prices}>
                    <span className={props.Price}>{props.price}</span>
                    <span className={props.Price}>{props.price}</span>
                </div>
                <p>{props.productName}</p>
                <div className={classes.Actions}>
                    <input type='number' value={0} />
                    <Button type='submit'>Add</Button>
                </div>
            </div>
            {
                props.lastUpdate?
                    <time dateTime={lastUpdate}>Last Update: {props.lastUpdate} </time>
                :null
            }
        </section>
    )
}

export default product;