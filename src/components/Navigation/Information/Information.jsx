import React, { Component } from 'react';
import classes from './Information.module.scss';
import {Data} from '../../../Data';
import Select from 'react-select';

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
        ]
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    
    render(){
        return(
            <header className={classes.InformationHeader}>
                <img src={Data.paymentMethods.source} />
                <Select
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={this.state.currencies}
                />
            </header>
        )
    }
}

export default Information;