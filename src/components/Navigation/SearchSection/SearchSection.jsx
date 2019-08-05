import React, { Component } from 'react';
import * as classes from './SearchSection.module.scss';
import Select from 'react-select';
import CarrfourLogo from '../../Logos/Logo';
import {Categories, Data} from '../../../Data'

class SearchSection extends Component{
    state = {
        selectedCategory: {
            label: 'All Categories',
            value: 'allCategories'
        },
    }

    handleChange = (selectedCategory) => {
        this.setState({ selectedCategory });
    };

    render(){
        return(
            <section className={classes.MiddleSection}>
                <CarrfourLogo source={Data.logos.carrfour.source} name={Data.logos.carrfour.title}/>
                <Select
                    value={this.state.selectedCategory}
                    onChange={this.handleChange}
                    options={Categories}
                />
            </section>
        )
    }
}

export default SearchSection;