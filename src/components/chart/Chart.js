import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

import colors from './colors';
import './chart.scss';

const Chart = (props) => {
  const { weather } = props;

  const tempData = {
    labels: weather.list.map(listItem => listItem.dt_txt), // .filter(label => label.includes('12:00:00')),
    datasets: [
      {
        label: 'Temperature',
        data: weather.list.map(listItem => listItem.main.temp),
        backgroundColor: colors[2],
      },
    ],
  };

  const humidityDate = {
    labels: weather.list.map(listItem => listItem.dt_txt), // .filter(label => label.includes('12:00:00')),
    datasets: [
      {
        label: 'Humidity',
        data: weather.list.map(listItem => listItem.main.humidity),
        backgroundColor: colors,
      },
    ],
  };

  return (
    <div>
      <div className="chart">
        <Line
          data={tempData}
          height={40}
          width={200}
          options={{
            title: {
              display: true,
              text: `Weather forecast for: ${weather.city.name}`,
              fontSize: '25',
            },
            legend: {
              dispaly: true,
              position: 'bottom',
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
        <Bar
          data={humidityDate}
          height={40}
          width={200}
          options={{
            title: {
              display: true,
              text: `Air humidity for: ${weather.city.name}`,
              fontSize: '25',
            },
            legend: {
              dispaly: true,
              position: 'bottom',
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
