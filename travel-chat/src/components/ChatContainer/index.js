import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '../../firebase';
import * as ROUTES from '../../constants/routes';

import { CreateChatForm, Header, FormRow, Submit } from './style'

class ChatContainer extends Component {
    state = {
        title: ''
    }
    chatRooms = firebase.database().ref().child('chatrooms')

    handleChange = e =>
        this.setState({
            [e.target.name]: e.target.value
        })

    handleSubmit = e => {
        const currentUserId = firebase.auth().currentUser.uid;
        const newRoom = {
            memberID: currentUserId
        }
        this.chatRooms.push(newRoom)
        this.props.history.push(ROUTES.CITIES)
    }
    render() {
        return (
            <CreateChatForm onSubmit={this.handleSubmit}>
                <Header>Create Chatroom</Header>
                <FormRow>
                    <Submit type="submit" value="Submit" />
                </FormRow>
            </CreateChatForm>
        )
    }
}

export default ChatContainer;