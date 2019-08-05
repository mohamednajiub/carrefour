import React, { Component } from 'react';
import * as classes from './Information.module.scss';
import {Data} from '../../../Data';
import Select from 'react-select';
import InformationNavigation from '../NavigationItems/NavigationItems';


class Information extends Component{
    state = {
        selectOption: null,
        currencies: [
            {
                label: 'EGP',
                value: 'egp'
            },
            {
                label: 'USD',
                value: 'usd'
            },
            {
                label: 'EUR',
                value: 'eur'
            }
        ],
        
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };
    
    render(){
        return(
            <header className={classes.InformationHeader}>
                <div className={classes.RightSection}>
                    <img src={Data.paymentMethods.source} alt={Data.paymentMethods.name}/>
                    <Select
                        value={this.state.selectedOption}
                        onChange={this.handleChange}
                        options={this.state.currencies}
                        className={classes.Select}
                    />
                </div>
                <InformationNavigation />
            </header>
        )
    }
}

export default Information;