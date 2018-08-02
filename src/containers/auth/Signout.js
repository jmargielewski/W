import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import MainLayout from '../layout/MainLayout';

class Signout extends Component {
  state = {
    msg: 'You have successfully logged out!',
  }

  componentDidMount() {
    this.props.signout();
  }

  render() {
    return (
      <MainLayout>
        <div className="signout">
          { this.state.msg }
        </div>
      </MainLayout>
    );
  }
}

export default connect(null, actions)(Signout);
