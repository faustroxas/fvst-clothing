import React from 'react';
import { FormInput } from '../form-input/form-input-component';
import { FormButton } from '../form-button/form-button-component';

import './signup-styles.scss'

export class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            confirm_password: ''
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]:value });
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            name: '',
            email: '',
            password: '',
            confirm_password: ''
        });
    }

    render() {
        return (
            <div className="signup">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit} > 
                    <FormInput 
                        name="name"
                        value={this.state.name}
                        handleChange={this.handleChange}
                        label="Display Name"
                        required
                    />
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
                    <FormInput 
                        name="confirm_password"
                        type="password"
                        value={this.state.confirm_password}
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