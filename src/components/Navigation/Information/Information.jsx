import React, { Component } from 'react';
import * as classes from './Information.module.scss';
import {Data, currencies} from '../../../Data';
import Select from 'react-select';
import NavigationItems from '../NavigationItems/NavigationItems';

class Information extends Component{
    state = {
        selectedOption: {
            label: 'EGP',
            value: 'egp'
        }
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
                        options={currencies}
                        className={classes.Select}
                    />
                </div>
                <NavigationItems linksItems={this.props.infoNavigation} className={classes.InformationNav} />
            </header>
        )
    }
}

export default Information;