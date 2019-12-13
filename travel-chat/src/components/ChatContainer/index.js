import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '../../firebase';
import * as ROUTES from '../../constants/routes';

import { BannerImage, CreateChatForm, Header, FormRow, FormInput, Label, Submit } from './style'

class ChatContainer extends Component {
    state = {
        chatName: ''
    }
    chatRooms = firebase.database().ref().child('chatrooms')

    handleChange = e =>
        this.setState({
            [e.target.name]: e.target.value
        })

    handleSubmit = e => {
        const currentUserId = firebase.auth().currentUser.uid;
        const { chatName } = this.state;
        const newRoom = {
            members: [currentUserId],
            roomname: chatName
        }
        this.chatRooms.push(newRoom)
        this.props.history.push(ROUTES.CITIES)
    }
    render() {
        const { chatName } = this.state
        return (
            <React.Fragment>
                <BannerImage src="https://cdn.pixabay.com/photo/2016/07/22/03/27/rio-de-janeiro-1534089__480.jpg" />
                <CreateChatForm onSubmit={this.handleSubmit}>
                    <FormRow>
                        <Label htmlFor="name">Room name</Label>
                        <FormInput type="text" name="chatName" value={chatName} onChange={this.handleChange} />
                    </FormRow>
                    <FormRow>
                        <Submit type="submit" value="Create Room" />
                    </FormRow>
                </CreateChatForm>
            </React.Fragment>

        )
    }
}

export default ChatContainer;