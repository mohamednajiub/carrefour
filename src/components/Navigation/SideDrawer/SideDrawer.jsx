import React from 'react';
import Logo from '../../Logos/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import * as classes from './sideDrawer.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import {Data} from '../../../Data';


const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo source={Data.logos.carrfour.source} name={Data.logos.carrfour.name} height="11%"/>
                <NavigationItems linksItems={props.linksItems} className={classes.MainNav} />
            </div>
        </>
        
    );
}

export default sideDrawer;