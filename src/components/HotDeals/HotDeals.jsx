import React, {Component} from 'react';
import * as classes from './HotDeals.module.scss';
import Titles from '../UI/Titles/Titles';
import Product from '../UI/Product/Product';
import {HotDeals} from '../../Data'
class Categories extends Component{
    render(){
        return (
            <div className={classes.HotDeals}>
                <div className="container">
                    <Titles title="hot deals" subtitle="new hot deals now" />
                    <div className={classes.DealsContainer}>
                        {HotDeals.map((deal, index)=>{
                            return <Product key={index} {...deal} />
                        })}
                    </div>
                </div>
            </div> 
          );
    }
}

export default Categories;
