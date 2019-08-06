import React, { Component } from 'react';
import * as classes from './Information.module.scss';
import {Data} from '../../../Data';
import Select from 'react-select';
import NavigationItems from '../NavigationItems/NavigationItems';
import {MdPlace, MdAccessTime, MdLocalPhone} from 'react-icons/md';
class Information extends Component{
    state = {
        selectedOption: {
            label: 'EGP',
            value: 'egp'
        },
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
        linksItems:[
            {
                link: '/stores',
                title: 'Stores',
                icon: <MdPlace />
            },
            {
                link: '/works-time',
                title: 'Works Time',
                icon: <MdAccessTime />
            },
            {
                link: '/contact-us',
                title: 'Contact us',
                icon: <MdLocalPhone />
            }
        ]
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
                <NavigationItems linksItems={this.state.linksItems} className={classes.InformationNav} />
            </header>
        )
    }
}

export default Information;