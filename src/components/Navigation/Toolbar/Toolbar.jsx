import React, { Component } from 'react';
import * as classes from './Toolbar.module.scss';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Information from '../Information/Information';
import SearchSection from '../SearchSection/SearchSection';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logos/Logo';
import {Link} from 'react-router-dom';
import {MdShoppingCart} from 'react-icons/md';
import {Data} from '../../../Data';

class Toolbar extends Component{
    render(){
        return(
            <header>
                <div className={classes.Toolbar}>
                    <div className="container">
                        <div className="MobileOnly">
                            <DrawerToggle clicked={this.props.drawerToggleClicked}/>
                            <Logo source={Data.logos.carrfour.source} name={Data.logos.carrfour.name}/>
                            <Link to='/cart' className={classes.LinkIcon}><MdShoppingCart /></Link>
                        </div>
                        <div className="DesktopOnly">
                            <Information infoNavigation={this.props.infoNavigation}/>
                        </div>
                    </div>
                </div>
                <div className="container DesktopOnly">
                    <SearchSection />
                </div>
                <div className="container">
                    <NavigationItems linksItems={this.props.mainNavigation} className={classes.MainNav} />
                </div>
            </header>
        )
    }
}

export default Toolbar;