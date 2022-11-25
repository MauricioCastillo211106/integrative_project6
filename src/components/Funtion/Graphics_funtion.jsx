import React from 'react'
import AnyChart from 'anychart-react'
import anychart from "anychart";


function Bar_Err () {

  // create a data set
  var data = anychart.data.set([
    ["January", 10000, 12500],
    ["February", 12000, 15000],
    ["March", 13000, 16500],
    ["April", 10000, 13000],
    ["May", 9000, 11000]
  ]);

  // map the data
  var seriesData_1 = data.mapAs({x: 0, value: 1});
  var seriesData_2 = data.mapAs({x: 0, value: 2});

  // create a chart
  var chart = anychart.column();

  // create the first series and set the data
  var series1 = chart.column(seriesData_1);

  // create the second series and set the data
  var series2 = chart.column(seriesData_2);

  // create error bars on the first series
  series1.error().valueError(400);

  // create error bars on the second series
  series2.error().valueLowerError(700);
  series2.error().valueUpperError(200);

  // set the chart title
  chart.title("Lower and Upper Error Bars: Cartesian");

  // set the container id
  chart.container("container");

  // initiate drawing the chart
  chart.draw();
};

export default Bar_Err;

