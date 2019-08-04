import React, { Component } from 'react';
import classes from './Toolbar.module.scss';

import Information from '../Information/Information'

class Toolbar extends Component{
    render(){
        return(
            <header className={classes.Toolbar}>
                <div className="container">
                    <Information />
                </div>
            </header>
        )
    }
}

export default Toolbar;