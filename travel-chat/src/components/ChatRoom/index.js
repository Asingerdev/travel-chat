import React, { Component } from 'react';
import Message from '../Message'
import firebase from 'firebase'

class ChatRoom extends Component {
    state = {
        displayName: '',
        message: '',
        list: []
    }
    chatHistory = firebase.database().ref().child('messages')

    handleChange = e =>
        this.setState({
            message: event.target.value
        })

    handleSend = () => {
        const { message, displayName } = this.state;
        if (message) {
            const newItem = {
                displayName: displayName,
                message: message
            }
            this.chatHistory.push(newItem);
            this.setState({ message: '' });
        }
    }

    handleKeyPress = e => {
        if (e.key !== 'Enter') return;
        this.handleSend();
    }

    listenMessages() {
        this.chatHistory
            .limitToLast(10)
            .on('value', message => {
                this.setState({
                    list: Object.keys(message).map((key) => {
                        return message[key];
                    })
                })
            })
    }
    render() {
        const { message } = this.state;
        return (
            <div className="chat-window">
                <div className="chat-message">

                </div>
                <div className="chat-row">
                    <input
                        className="chat-input"
                        type="text"
                        placeholder="Send message"
                        value={message}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                    <button
                        className="chat-button"
                        onClick={this.handleSend}
                    >
                        enter
                </button>
                </div>
            </div>
        )

    }

}