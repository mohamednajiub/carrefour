import React, {Component} from 'react';
import * as classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import {MdPlace, MdAccessTime, MdLocalPhone} from 'react-icons/md';

class InformationNavigation extends Component{
    state ={
        linkItems:[
            {
                link: '/stores',
                title: 'Stores',
                icon: <MdPlace />
            },
            {
                link: '/works-time',
                title: 'Works Time',
                icon: <MdAccessTime />
            },
            {
                link: '/contact-us',
                title: 'Contact us',
                icon: <MdLocalPhone />
            }
        ]
    }
    render(){
        return(
            <nav>
                <ul className={classes.InformationNavigation}>
                    {this.state.linkItems.map((link, index)=>{
                        return (
                            <NavigationItem key={index}  link={link.link}>
                                {link.icon}
                                {link.title}
                            </NavigationItem>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default InformationNavigation;