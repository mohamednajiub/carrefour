import React, { Component } from 'react';
import classes from './Toolbar.module.scss';

import Information from '../Information/Information';
import SearchSection from '../SearchSection/SearchSection';

class Toolbar extends Component{
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
                </div>
            </header>
        )
    }
}

export default Toolbar;