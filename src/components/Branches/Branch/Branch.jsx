import React from 'react';
import * as classes from './Branch.module.scss';
import {Link} from 'react-router-dom';

const branch = (props) =>{
    return (
        <Link to={props.link} className={classes.Branch}>
            <img src={props.source} alt={props.place}/>
            <div className={classes.Overlay}>
                <h4>{props.place}</h4>
            </div>
        </Link>
    );
}

export default branch;
