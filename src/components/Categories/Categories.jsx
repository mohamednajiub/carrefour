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
                subtitle: 'while not exectly line',
                link: 'free-shipping'
            },
            {
                icon: <FaBicycle />,
                title: 'free shipping',
                subtitle: 'while not exectly line',
                link: 'free-shipping'
            },
            {
                icon: <FaBicycle />,
                title: 'free shipping',
                subtitle: 'while not exectly line',
                link: 'free-shipping'
            },
            {
                icon: <FaBicycle />,
                title: 'free shipping',
                subtitle: 'while not exectly line',
                link: 'free-shipping'
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
                        {this.state.categories.map((category, index)=>{
                            return <Label key={index} {...category}/>
                        })}
                    </div>
                </div>
            </div>
          );
    }
}

export default Categories;
