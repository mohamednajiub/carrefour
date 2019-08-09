import React from 'react';
import * as classes from './Label.module.scss';
import LinkButton from '../LinkButton/LinkButton';


const linkButton = (props) => {
    return (
        <div className={[classes.Label, props.className].join(' ')}>
            <LinkButton className={classes.Icon} link={props.link}>
                {props.icon}
            </LinkButton>
            <div>
                <h4>{props.title}</h4>
                <h5>{props.subtitle}</h5>
            </div>
        </div>
    )
}

export default linkButton;