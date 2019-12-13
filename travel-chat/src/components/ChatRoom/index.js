import React, { Component } from 'react';
import Message from '../Message';
import firebase from 'firebase';

import { ChatContainer, SideBar, UserList, User, UserAbout, ChatWindow, ChatHeader, ChatAbout, ChatHistory, ChatRow, ChatInput, UserAvatar } from './style';


class ChatRoom extends Component {
    state = {
        message: '',
        messageList: [],
        members: []
    }
    chatHistory = firebase.database().ref().child('messages')
    chatRoom = firebase.database().ref().child('chatrooms')

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
        const messages = firebase.database().ref(`messages/`)
        messages
            .limitToLast(10)
            .on('value', (snapshot) => {
                this.setState({
                    messageList: Object.values(snapshot.val())
                })
            });
    }

    render() {
        const { message, messageList, members } = this.state;
        return (
            <ChatContainer>
                <SideBar>
                    <UserList>
                        <User>
                            <span>
                                <UserAvatar alt="Todd Rundgren" src="https://piercebrwn.files.wordpress.com/2016/10/x-todd-rundgren-todd-front-2.jpg" />
                                <UserAbout>
                                    Greg Cool
                                </UserAbout>
                            </span>
                        </User>
                        <User>
                            <span>
                                <UserAvatar alt="Todd Rundgren" src="https://www.biography.com/.image/t_share/MTI0ODE2NzgxMTc1OTg1NDI2/shutterstock_141908704-200x200jpg.jpgg" />
                                <UserAbout>
                                    Mike Lang
                                </UserAbout>
                            </span>
                        </User>
                    </UserList>
                </SideBar>
                <ChatWindow>
                    <ChatHeader>
                        <ChatAbout>Madrid</ChatAbout>
                    </ChatHeader>
                    <ChatHistory>
                        {messageList.map((item, index) =>
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
                    </ChatRow>
                </ChatWindow>
            </ChatContainer>
        )
    }
}

export default ChatRoom;