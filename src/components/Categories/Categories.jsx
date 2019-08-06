import React, {Component} from 'react';
import * as classes from './Categories.module.scss';
import Titles from '../UI/Titles/Titles';
import SliderComponent from '../Slider/Slider';

class Categories extends Component{
    render(){
        return (
            <div className={classes.Categories}>
                <div className="container">
                    <Titles title="shopping by category" subtitle="online shopping for everything" />
                    <SliderComponent />
                </div>
                
            </div>
          );
    }
}

export default Categories;
