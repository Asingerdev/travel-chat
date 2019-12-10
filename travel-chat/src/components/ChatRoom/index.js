import React, { Component } from 'react';
import Message from '../Message';
import firebase from 'firebase';

import { ChatWindow, ChatMessage, ChatRow, ChatInput, ChatButton } from './style';

class ChatRoom extends Component {
    state = {
        message: '',
        list: []
    }
    chatHistory = firebase.database().ref().child('thread')

    componentDidMount() {
        this.listenMessages();
    }

    handleChange = e =>
        this.setState({
            message: e.target.value
        })

    handleSend = () => {
        const { message } = this.state;
        const currentUserId = firebase.auth().currentUser.uid;
        const senderName = firebase.auth().currentUser.displayName;
        if (message) {
            const newMessage = {
                content: message,
                timestamp: Date.now(),
                senderID: currentUserId,
                senderName: senderName
            }
            this.chatHistory.push(newMessage);
            this.setState({ message: '' });
        }
    }

    handleKeyPress = e => {
        if (e.key !== 'Enter') return;
        this.handleSend();
    }

    listenMessages() {
        const messages = firebase.database().ref(`thread/`)
        messages
            .limitToLast(10)
            .on('value', (snapshot) => {
                snapshot.forEach(s => console.log(s.val().content))
            });
    }

    render() {
        const { message } = this.state;
        return (
            <ChatWindow>
                <ChatMessage>

                </ChatMessage>
                <ChatRow>
                    <ChatInput
                        className="chat-input"
                        type="text"
                        placeholder="Send message"
                        value={message}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                    <ChatButton
                        className="chat-button"
                        onClick={this.handleSend}
                    >
                        enter
                </ChatButton>
                </ChatRow>
            </ChatWindow>
        )
    }
}

export default ChatRoom;