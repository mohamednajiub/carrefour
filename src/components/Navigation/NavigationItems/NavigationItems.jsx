import React from 'react';
import * as classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => {
    console.log(props.linksItems)
    return(
        <nav>
            <ul className={[props.className, classes.NavigationItems].join(' ')}>
                {props.linksItems.map((link, index)=>{
                    return (
                        <NavigationItem key={index} link={link.link}>
                            {link.icon}
                            {link.title||link.label}
                        </NavigationItem>
                    )
                })}
            </ul>
        </nav>
    )
}

export default navigationItems;