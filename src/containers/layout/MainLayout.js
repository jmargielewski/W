import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/header/Header';

import './mainLayout.scss';

class MainLayout extends React.PureComponent {
  render() {
    const { authenticated } = this.props;
    return (
      <div id="main-layout">
        <Header authenticated={ authenticated } />
        <div id="main-layout-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  { authenticated: state.auth.authenticated }
);

export default connect(mapStateToProps)(MainLayout);
