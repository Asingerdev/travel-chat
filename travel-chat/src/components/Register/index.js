import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '../../firebase';
import * as ROUTES from '../../constants/routes';

import { SignUpForm, Header, FormRow, LoginText, Label, FormInput, Submit } from './style'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        error: null
    }

    handleChange = e =>
        this.setState({
            [e.target.name]: e.target.value
        })

    handleSubmit = e => {
        e.preventDefault();
        const { email, username, password } = this.state;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                const user = firebase.auth().currentUser;
                user
                    .updateProfile({ displayName: username })
                    .then(() => {
                        this.writeUserData();
                    })
                    .then(() => {
                        this.props.history.push(ROUTES.HOME);
                    })
                    .catch(error => {
                        this.setState({ error });
                    });
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    writeUserData = () => {
        const { email, username } = this.state;
        const userId = firebase.auth().currentUser.uid;
        firebase
            .database()
            .ref(`users/${userId}`)
            .set({
                username,
                email
            })
    }

    render() {
        const { email, username, password, error } = this.state;

        const isInvalid =
            username === '' ||
            email === '' ||
            password === ''

        return (
            <SignUpForm onSubmit={this.handleSubmit}>
                <Header>Create Account</Header>
                <FormRow>
                    <Label htmlFor="username"><PersonIcon style={{ display: "inline-block", marginBottom: "-5px", fontSize: "20px" }} />Username</Label>
                    <FormInput type="text" name="username" value={username} onChange={this.handleChange} />
                </FormRow>
                <FormRow>
                    <Label htmlFor="email"><EmailIcon style={{ display: "inline-block", marginBottom: "-4px", fontSize: "16px", marginRight: "3px" }} />Email</Label>
                    <FormInput type="text" name="email" value={email} onChange={this.handleChange} />
                </FormRow>
                <FormRow>
                    <Label htmlFor="password"><LockIcon style={{ display: "inline-block", marginBottom: "-4px", fontSize: "18px", marginRight: "2px" }} />Password</Label>
                    <FormInput type="password" name="password" value={password} onChange={this.handleChange} />
                </FormRow>
                <FormRow>
                    <Submit type="submit" value="Submit" disabled={isInvalid} />
                </FormRow>
                <LoginText className="signup-redirect">Already have an account?<Link to={ROUTES.LOGIN}>Log in</Link></LoginText>
                {error && <p>{error.message}</p>}
            </SignUpForm>
        )
    }
}

export default Register
