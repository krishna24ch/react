import React, { PureComponent } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { submitLogin } from './loginReducer';
import './login.scss';

class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            userName: '',
            password: '',
        }
    }

    handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        const { userName, password } = this.state

        submitLogin({userName, password});
        this.setState({ validated: true });
    };

    onUserNameChange = ({ target }) => {
        const { userName } = this.state;
        if(userName !== target.value) {
            this.setState({ userName: target.value });
        }
    }

    onPwdChange = ({ target }) => {
        const { password } = this.state;
        if (password !== target.value) {
            this.setState({ password: target.value });
        }
    }

    render() {
        const { validated } = this.state;
        return (
            <div>
                <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
                    <Form.Label className="inputLabel">user name</Form.Label>
                    <Form.Control
                      className="loginInput"
                      onChange={this.onUserNameChange}
                      required
                    />
                    <Form.Label className="inputLabel">password</Form.Label>
                    <Form.Control
                      className="loginInput"
                      type="password"
                      onChange={this.onPwdChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">* password is incorrect</Form.Control.Feedback>
                    <div className="forgotContainer">
                        <Link to="/recovery" className="forgotText">forgot password?</Link>
                    </div>
                    <div className="loginBtnContainer">
                        <Button type="submit" className="loginButton">LOG IN</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default connect(state => ({
    userName: state.login.userName,
    password: state.login.password,
}),
{
    submitLogin,
})(Login)