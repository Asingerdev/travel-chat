import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '../../firebase';
import * as ROUTES from '../../constants/routes';

import { BannerImage, CreateChatForm, Header, FormRow, Submit } from './style'

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
            <React.Fragment>
                <BannerImage src="https://cdn.pixabay.com/photo/2016/07/22/03/27/rio-de-janeiro-1534089__480.jpg" />
                <CreateChatForm onSubmit={this.handleSubmit}>
                    <Header>Join Chatroom</Header>
                    <FormRow>
                        <Submit type="submit" value="Submit" />
                    </FormRow>
                </CreateChatForm>
            </React.Fragment>

        )
    }
}

export default ChatContainer;