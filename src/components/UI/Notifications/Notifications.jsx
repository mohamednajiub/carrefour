import React from 'react';
import * as classes from './Notifications.module.scss';

const notifications = (props) => {
    return (
        <div className={[props.className, classes.Button].join(' ')}>
            {props.numberOfNotifications}
        </div>
    )
}

export default notifications;