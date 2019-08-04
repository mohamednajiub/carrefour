import React, { Component } from 'react';
import classes from './Information.module.scss';
import {Data} from '../../../Data';

class Information extends Component{
    render(){
        return(
            <header className={classes.InformationHeader}>
                <img src={Data.paymentMethods.source} />
            </header>
        )
    }
}

export default Information;