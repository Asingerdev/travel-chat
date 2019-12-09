import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '../../firebase';
import * as ROUTES from '../../constants/routes';

import { SignUpForm } from './style'
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
                        this.props.history.push('/');
                    })
                    .catch(error => {
                        this.setState({ error });
                    });
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    render() {
        const { email, username, password, error } = this.state;

        const isInvalid =
            username === '' ||
            email === '' ||
            password === ''

        return (
            <SignUpForm onSubmit={this.handleSubmit}>
                <h1>Create Account</h1>
                <p>
                    <label htmlFor="username"><PersonIcon style={{ display: "inline-block", marginBottom: "-5px", fontSize: "20px" }} />Username</label>
                    <input type="text" name="username" value={username} onChange={this.handleChange} />
                </p>
                <p>
                    <label htmlFor="email"><EmailIcon style={{ display: "inline-block", marginBottom: "-4px", fontSize: "16px", marginRight: "3px" }} />Email</label>
                    <input type="text" name="email" value={email} onChange={this.handleChange} />
                </p>
                <p>
                    <label htmlFor="password"><LockIcon style={{ display: "inline-block", marginBottom: "-4px", fontSize: "18px", marginRight: "2px" }} />Password</label>
                    <input type="password" name="password" value={password} onChange={this.handleChange} />
                </p>
                <p>
                    <input type="submit" value="Submit" disabled={isInvalid} />
                </p>
                <p className="signup-redirect">Already have an account?<Link to={ROUTES.LOGIN}>Log in</Link></p>
                {error && <p>{error.message}</p>}
            </SignUpForm>
        )
    }
}

export default Register
