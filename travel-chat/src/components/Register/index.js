import React, { Component } from 'react';
import { firebase } from '../../firebase';
import * as ROUTES from '../../constants/routes';

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
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <label for="username">Username</label>
                    <input type="text" name="username" value={username} onChange={this.handleChange} />
                    <label for="email">Email address</label>
                    <input type="text" name="email" value={email} onChange={this.handleChange} />
                    <label for="password">Password</label>
                    <input type="password" name="password" value={password} onChange={this.onChange} />
                    <input type='submit' value='submit' disabled={isInvalid} />
                    {error && <p>{error.message}</p>}
                    <p>Already have an account?</p>
                </form>
            </div>
        )
    }
}

export default Register