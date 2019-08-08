import React, { Component } from 'react';
import classes from './Toolbar.module.scss';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Information from '../Information/Information';
import SearchSection from '../SearchSection/SearchSection';
import NavigationItems from '../NavigationItems/NavigationItems';

class Toolbar extends Component{
    render(){
        return(
            <header>
                <div className={classes.Toolbar}>
                    <div className="container">
                        <DrawerToggle clicked={this.props.drawerToggleClicked}/>
                        <Information />
                    </div>
                </div>
                <div className="container">
                    <SearchSection />
                    <div className="MainNav">
                        <NavigationItems linksItems={this.props.linksItems} className={classes.MainNav} />
                    </div>
                </div>
            </header>
        )
    }
}

export default Toolbar;