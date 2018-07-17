import React, { Component } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import _ from 'lodash';
import '../App.css';

class Chat extends Component {
    render() {

        let msgs = [];
        
        this.props.messages.from.messages.map(msg => msgs.push(msg));
        this.props.messages.to.messages.map(msg => msgs.push(msg));

        msgs = _.sortBy(msgs, 'timestamp');
        console.log(this.props, 'merged', msgs);
        return (
            <List>
                {msgs.map(message => (
                    <li key={`section-${message.timestamp}`}>
                        <ul>
                            <ListItem key={`item-${message.timestamp}`}>
                                <ListItemText primary={message.text} />
                            </ListItem>
                        </ul>
                    </li>
                ))}
            </List>
        );
    }
}

export default Chat;