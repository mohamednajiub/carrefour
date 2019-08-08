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
                layoutMode: "fitRows",
                percentPosition: true,
                fitRows: {
                    gutter: '.gutter-sizer'
                }
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
            // Filter Buttons
            <section className="container">
                <header className={classes.InfoContainer}>
                    <Titles title="hot deals" subtitle="Now hot deals now"/>
                    <div className="button-group filter-button-group grid-filters">
                        <div className="tabs is-centered is-toggle">
                            <ul className={classes.FilterLinks} id="portfolio-filters">
                                <li data-filter="*" onClick={() => {this.onFilterChange("*")}}>All</li>
                                {
                                    Data.map((item, index)=>{
                                        return <li key={index} data-filter={item.category.slug} onClick={(event) => {this.onFilterChange(item.category.slug, event)}}>{item.category.title}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </header>

                <div className={`grid ${classes.ItemsContainer}`} id="grid-container">
                    <div className="grid-sizer"></div>
                    <div className="gutter-sizer"></div>
                    {
                        Data?
                            Data.length>0?
                                Data.map((item,index) => (
                                    <Product key={index} className={`grid-item ${item.category.slug}`} {...item}/>
                                ))
                            :null
                        :null
                    }
                </div>
            </section>
        )
    }
}

export default FilterGrid