import React, { Component } from 'react';
import classes from './Toolbar.module.scss';

import Information from '../Information/Information';
import SearchSection from '../SearchSection/SearchSection';
import NavigationItems from '../NavigationItems/NavigationItems';
import {MdPhoneIphone, MdShoppingBasket} from 'react-icons/md';
import {FaGrin, FaPizzaSlice, FaTshirt, FaBaseballBall, FaBriefcaseMedical, FaStar} from 'react-icons/fa';

class Toolbar extends Component{
    state={
        linksItems:[
            {
                link: '/smart-phone',
                title: 'Smart Phone',
                icon: <MdPhoneIphone />
            },
            {
                link: '/super-market',
                title: 'Super Market',
                icon: <MdShoppingBasket />
            },
            {
                link: '/babys',
                title: 'Babys',
                icon: <FaGrin />
            },
            {
                link: '/girls',
                title: 'Girls',
                icon: <FaStar />
            },
            {
                link: '/health-care',
                title: 'Health Care',
                icon: <FaBriefcaseMedical />
            },
            {
                link: '/baby-world',
                title: 'Baby World',
                icon: <FaBaseballBall />
            },
            {
                link: '/clothes',
                title: 'Clothes',
                icon: <FaTshirt />
            },
            ,
            {
                link: '/food',
                title: 'Food',
                icon: <FaPizzaSlice />
            },
        ]
    }
    render(){
        return(
            <header>
                <div className={classes.Toolbar}>
                    <div className="container">
                        <Information />
                    </div>
                </div>
                <div className="container">
                    <SearchSection />
                    <div className="MainNav">
                        <NavigationItems linksItems={this.state.linksItems} className={classes.MainNav} />
                    </div>
                    
                </div>
            </header>
        )
    }
}

export default Toolbar;