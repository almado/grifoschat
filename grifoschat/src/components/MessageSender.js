import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Icon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { sendMessage } from '../actions';
import '../App.css';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

class MessageSender extends Component {

    state = {
        message: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    sendMessage() {
        if(this.state.message == null || this.state.message.length === 0)
            return;

        this.props.sendMessage({ message: this.state.message });
        this.setState({ message: '' });
    }

    render() {

        return (
            <form noValidate autoComplete="off">
                <TextField
                    id="message"
                    label=""
                    rows={5}
                    className="chat-input"
                    value={this.state.message}
                    onChange={this.handleChange('message')}
                    margin="normal"
                />
                <Button variant="fab" color="primary" onClick={this.sendMessage.bind(this)}>
                    <Icon>send</Icon>
                </Button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    const { messages } = state.messages;
    return { messages };
};

export default connect(mapStateToProps, { sendMessage })(withStyles(styles)(MessageSender));
