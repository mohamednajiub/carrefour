import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import * as classes from './sideDrawer.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <div className={props.className}>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <NavigationItems linksItems={props.linksItems} className={classes.MainNav} />
            </div>
        </div>
        
    );
}

export default sideDrawer;