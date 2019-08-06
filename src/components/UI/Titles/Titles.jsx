import React from 'react';
import * as classes from './Titles.module.scss';

const Titles = (props) =>{
  return (
    <div className={classes.Titles}>
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
    </div>
  );
}

export default Titles;
