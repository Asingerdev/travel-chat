import React, { Component } from 'react';
import Message from '../Message';
import firebase from 'firebase';

import { ChatContainer, SideBar, UserList, User, UserAbout, ChatWindow, ChatHeader, ChatAbout, ChatHistory, ChatRow, ChatInput, ChatButton } from './style';

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
                this.setState({
                    list: Object.values(snapshot.val())
                })
            });
    }

    render() {
        const { message } = this.state;
        return (
            <ChatContainer>
                <SideBar>
                    <UserList>
                        <User>
                            <UserAbout>
                                Greg Mike
                            </UserAbout>
                        </User>
                    </UserList>
                </SideBar>
                <ChatWindow>
                    <ChatHeader>
                        <ChatAbout>Spain Chatroom</ChatAbout>
                    </ChatHeader>
                    <ChatHistory>
                        {this.state.list.map((item, index) =>
                            <Message key={index} message={item} />
                        )}
                    </ChatHistory>
                    <ChatRow>
                        <ChatInput
                            type="text"
                            placeholder="Type your message"
                            value={message}
                            onChange={this.handleChange}
                            onKeyPress={this.handleKeyPress}
                        />
                        <ChatButton
                            className="chat-button"
                            onClick={this.handleSend}
                        >
                            Send
                    </ChatButton>
                    </ChatRow>
                </ChatWindow>
            </ChatContainer>
        )
    }
}

export default ChatRoom;