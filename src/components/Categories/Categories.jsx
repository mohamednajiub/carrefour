import React, {Component} from 'react';
import * as classes from './Categories.module.scss';
import Titles from '../UI/Titles/Titles';
import SliderComponent from '../Slider/Slider';
import {FaBicycle} from 'react-icons/fa';
import Label from '../UI/Label/Label'
class Categories extends Component{
    state={
        categories: [
            {
                icon: <FaBicycle />,
                title: 'free shipping',
                subtitle: 'while not exectly line'
            },
            {
                icon: <FaBicycle />,
                title: 'free shipping',
                subtitle: 'while not exectly line'
            },
            {
                icon: <FaBicycle />,
                title: 'free shipping',
                subtitle: 'while not exectly line'
            },
            {
                icon: <FaBicycle />,
                title: 'free shipping',
                subtitle: 'while not exectly line'
            }
        ]
    }
    render(){
        return (
            <div className={classes.Categories}>
                <div className="container">
                    <Titles title="shopping by category" subtitle="online shopping for everything" />
                    <SliderComponent />
                    <div className={classes.IconCategories}>
                        {this.state.categories.map(category=>{
                            return <Label icon={category.icon} title={category.title} subtitle={category.subtitle}/>
                        })}
                    </div>
                </div>
            </div>
          );
    }
}

export default Categories;
