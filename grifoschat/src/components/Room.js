import React, { Component } from 'react';
import MessageSender from './MessageSender';
import Chat from './Chat';
import { connect } from 'react-redux';
import '../App.css';

class Room extends Component {

    render() {
        return (
            <div>
                <Chat messages={this.props.messages} />
                <MessageSender />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    const { messages } = state;
    
    console.log(messages);
    return { messages };
};

export default connect(mapStateToProps)(Room);
