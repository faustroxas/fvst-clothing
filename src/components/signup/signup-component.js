import React from 'react';
import { FormInput } from '../form-input/form-input-component';
import { FormButton } from '../form-button/form-button-component';
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';

import './signup-styles.scss'

export class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        
        if (password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (err) {
            console.error(err);
        }

    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit} > 
                    <FormInput 
                        name="displayName"
                        value={displayName}
                        handleChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput 
                        name="email"
                        type="email"
                        value={email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput 
                        name="password"
                        type="password"
                        value={password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput 
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />

                    <FormButton type="Submit">SIGN UP</FormButton>
                </form>
            </div>
        )
    }
}