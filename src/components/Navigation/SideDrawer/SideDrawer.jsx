import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import * as classes from './sideDrawer.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import {Categories} from '../../../Data';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <div className={props.className}>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <NavigationItems linksItems={Categories} className={classes.SideDrawerNavigation} />
                <NavigationItems linksItems={props.infoNavigation} className={classes.SideDrawerNavigation} />
            </div>
        </div>
        
    );
}

export default sideDrawer;