import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import './login.scss';

const PasswordRecovery = () => {
    return (
        <div>
            <div className="pwdRecovery">
                <div className="recoveryTitle">PASSWORD RECOVERY</div>
                <div className="recoveryDescription">Enter your email address below and we&apos;ll send you a link to reset your password.</div>

                <Form className="email">
                    <Form.Label className="inputLabel">email address</Form.Label>
                    <Form.Control className="loginInput" />
                </Form>
            </div>
        </div>
    );
}

export default connect(state => ({
    email: state.login.email,
}))(PasswordRecovery);