import React from 'react';
import * as classes from './LinkButton.module.scss';
import {Link} from 'react-router-dom';


const linkButton = (props) => {
    return (
        <Link to={props.link} className={[props.className, classes.Button].join(' ')}>
            {props.children}
        </Link>
    )
}

export default linkButton;