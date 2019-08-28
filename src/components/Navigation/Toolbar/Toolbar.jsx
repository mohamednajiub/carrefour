import React, { Component } from 'react';
import * as classes from './Toolbar.module.scss';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Information from '../Information/Information';
import SearchSection from '../SearchSection/SearchSection';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logos/Logo';
import {Link} from 'react-router-dom';
import {MdShoppingCart, MdSearch} from 'react-icons/md';
import {Data} from '../../../Data';
import Notifications from '../../UI/Notifications/Notifications';
import SearchForm from '../../UI/SearchForm/SearchForm';

class Toolbar extends Component{
    state={
        search: false
    }
    mobileSearchHandler = () =>{
        this.setState(prevState => ({
            search: !prevState.search
        }));
    }
    render(){
        return(
            <header>
                <div className={classes.Toolbar}>
                    <div className="container">
                        <div className="MobileOnly">
                            <DrawerToggle clicked={this.props.drawerToggleClicked}/>
                            <Logo source={Data.logos.carrfour.source} name={Data.logos.carrfour.name}/>
                            <MdSearch onClick={this.mobileSearchHandler}/>
                            <Link to='/cart' className={classes.LinkIcon}>
                                <MdShoppingCart/>
                                <Notifications className={classes.Notifications} numberOfNotifications={5}/>
                            </Link>
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
                    <SearchForm show={this.state.search} />
                </div>
            </header>
        )
    }
}

export default Toolbar;