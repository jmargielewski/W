import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import capitalize from 'capitalize';

import {
  isRequire,
  validateEmail,
  matchesPassword,
  isNumber,
} from '../../validation/validation';
import CustomInput from '../CustomInputs';

import './forms.scss';

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="firstname"
          component={CustomInput}
          type="text"
          label="First name"
          normalize={capitalize}
          validate={[isRequire]}
          autocomplete="given-name"
        />
        <Field
          name="surname"
          component={CustomInput}
          type="text"
          label="Surname"
          normalize={capitalize}
          validate={[isRequire]}
          autocomplete="family-name"
        />
        <Field
          name="email"
          component={CustomInput}
          type="email"
          label="E-mail address"
          validate={[isRequire, validateEmail]}
          autocomplete="email"
        />
        <Field
          name="phone"
          component={CustomInput}
          type="tel"
          label="Phone"
          validate={[isRequire, isNumber]}
          autocomplete="tel-national"
        />
        <Field
          name="street"
          component={CustomInput}
          type="text"
          label="Street"
          normalize={capitalize}
          validate={[isRequire]}
          autocomplete="address-line1"
        />
        <Field
          name="city"
          component={CustomInput}
          type="tel"
          label="City"
          normalize={capitalize}
          validate={[isRequire]}
          autocomplete="address-line2"
        />
        <Field
          name="password"
          component={CustomInput}
          type="password"
          label="Password"
          validate={[isRequire]}
          autocomplete="off"
        />
        <Field
          name="passwordConfirm"
          component={CustomInput}
          type="password"
          label="Password Confirm"
          validate={[isRequire, matchesPassword]}
          autocomplete="off"
        />
        <div className="btn-wrap">
          <button className="btn" type='submit'>SIGN UP
            <div className="btn-hover">SIGN UP</div>
            <div className="btn-hover-border"></div>
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'register',
  destroyOnUnmount: false,
})(RegisterForm);
