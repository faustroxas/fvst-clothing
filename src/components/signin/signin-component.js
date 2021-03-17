import React from 'react';
import { FormInput } from '../form-input/form-input-component';
import { FormButton } from '../form-button/form-button-component';
import { signInWithGoogle } from '../../firebase/firebase-utils';

import './signin-styles.scss';

export class SignIn extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]:value });
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''})
    }

    render(){
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required   
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="Password"
                        required 
                    />
                    <div className="buttons">
                        <FormButton type="Submit">SIGN IN</FormButton>
                        <FormButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</FormButton>
                    </div>
                </form>
            </div>
        )
    }
}