import React from 'react';
import * as classes from './Logo.module.scss';
const coloredLogo = (props)=>(
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={props.source} alt={props.name}/>
    </div>
);

export default coloredLogo;