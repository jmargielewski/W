import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import MainLayout from './layout/MainLayout';
import Chart from '../components/chart/Chart';
import Preloader from '../components/preloader/Preloader';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchWeatherData();
  }

  render() {
    return (
      <MainLayout>
        <div>
          { this.props.weather.city ? <Chart weather={this.props.weather} /> : <Preloader /> }
        </div>
      </MainLayout>
    );
  }
}

const mapStateToProps = state => (
  { weather: state.weather }
);

export default connect(mapStateToProps, actions)(Dashboard);
