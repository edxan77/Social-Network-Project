import React from 'react';

function NotificationList(props) {
    return (
        <div className={props.className}>
            {props.icon}
            <span className={props.spanClass}>{props.count}</span>
        </div>
    );
}

export default NotificationList;