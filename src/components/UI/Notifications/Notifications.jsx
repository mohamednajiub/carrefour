import React from 'react';
import * as classes from './Notifications.module.scss';

const notifications = (props) => {
    return (
        <div className={classes.Button}>
            {props.numberOfNotifications}
        </div>
    )
}

export default notifications;