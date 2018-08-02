import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import LoginForm from '../../components/forms/LoginForm';
import MainLayout from '../layout/MainLayout';

class Signin extends Component {
  submit = (formProps) => {
    const { staticUser, signin, history } = this.props;

    signin(formProps, staticUser, () => {
      history.push('/dashboard');
    });
  };

  render() {
    return (
      <MainLayout>
        <LoginForm
          onSubmit={this.submit}
          errorMessage={this.props.errorMessage}
        />
      </MainLayout>
    );
  }
}

const mapStateToProps = state => ({
  staticUser: state.form.register.values,
  errorMessage: state.auth.errorMessage,
});

export default connect(mapStateToProps, actions)(Signin);
