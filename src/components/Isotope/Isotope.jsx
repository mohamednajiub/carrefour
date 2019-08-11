import React, {Component} from 'react';
import Isotope from "isotope-layout";
import Product from '../UI/Product/Product';
import * as classes from './Isotope.module.scss';
import Titles from '../UI/Titles/Titles';

class FilterGrid extends Component {
    // Click Function
    onFilterChange = (newFilter) => {
        if (this.iso === undefined) {
            this.iso = new Isotope('#grid-container', {
                itemSelector: '.grid-item',
                layoutMode: 'fitRows',
                percentPosition: true,
            });
        }
        if(newFilter === '*') {
            this.iso.arrange({ filter: `*` });
        } else {
            this.iso.arrange({ filter: `.${newFilter}` });
        }
    }

    render() {
        const Data = this.props.Data

        return(
            <section className={classes.IsotopeContainer} style={this.props.style}>
                <div className="container">
                    <header className={classes.InfoContainer}>
                        <Titles title={this.props.componentTitle} subtitle={this.props.componentSubtitle}/>
                        <ul className={classes.FilterLinks}>
                            <li className={classes.Active} data-filter="*" onClick={() => {this.onFilterChange("*")}}>All</li>
                            {
                                Data.categoriesTitle.map((item, index)=>{
                                    return <li key={index} data-filter={item.slug} onClick={(event) => {this.onFilterChange(item.slug, event)}}>{item.title}</li>
                                })
                            }
                        </ul>
                    </header>

                    <div className={`isotope ${classes.ItemsContainer}`} id="grid-container">
                        {
                            Data?
                                Data.categoriesData.length>0?
                                    Data.categoriesData.map((item,index) => (
                                        <Product key={index} className={`grid-item ${item.category}`} {...item}/>
                                    ))
                                :null
                            :null
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default FilterGrid