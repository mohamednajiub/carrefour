import React from 'react';
import classes from './Button.module.scss';

const button = (props) => (
    <button
        type={props.type}
        className={[classes.Button, classes[props.btnType], props.className].join(' ')}
        onClick={props.clicked}
        disabled={props.disabled}
    >
        {props.children}
    </button>
);

export default button;