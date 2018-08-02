import React, { Component } from 'react';

import MainLayout from '../layout/MainLayout';
import RegisterForm from '../../components/forms/RegisterForm';

class Signup extends Component {
  submit = (valueProps) => {
    // window.alert(JSON.stringify(valueProps, null, 4));
    this.props.history.push('/signin');
  };

  render() {
    return (
      <MainLayout>
        <RegisterForm
          onSubmit={this.submit}
        />
      </MainLayout>
    );
  }
}

export default Signup;
