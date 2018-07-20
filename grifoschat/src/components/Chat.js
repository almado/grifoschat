import React, { Component } from 'react';
import { List } from '@material-ui/core';
import _ from 'lodash';
import '../App.css';

class Chat extends Component {

    getClass(message) {
        return message.sender === "João" ? "ballon-primary" : "ballon-secondary";
    }

    render() {

        let msgs = [];

        this.props.messages.from.messages.map(msg => msgs.push(msg));
        this.props.messages.to.messages.map(msg => msgs.push(msg));

        msgs = _.sortBy(msgs, 'timestamp');
        
        return (
            <List>
                {msgs.map(message => (
                    <li key={`section-${message.timestamp}`}>
                        <ul>
                            <div className={this.getClass(message)}>
                                {message.text}
                            </div>
                        </ul>
                    </li>
                ))}
            </List>
        );
    }
}

export default Chat;