import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { isRequire, validateEmail } from '../../validation/validation';
import CustomInput from '../CustomInputs';

import './forms.scss';

class LoginForm extends Component {
  render() {
    const { handleSubmit, errorMessage } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          component={CustomInput}
          type="email"
          label="Email"
          validate={[isRequire, validateEmail]}
        />
        <Field
          name="password"
          component={CustomInput}
          type="password"
          label="Password"
          validate={[isRequire]}
          autocomplete="off"
        />
        <div className="error-text">{errorMessage}</div>
        <div className="btn-wrap">
          <button className="btn" type='submit'>SIGN IN
            <div className="btn-hover">SIGN IN</div>
            <div className="btn-hover-border"></div>
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: 'login', destroyOnUnmount: false })(LoginForm);
