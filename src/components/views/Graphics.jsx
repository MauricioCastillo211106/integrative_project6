import React from 'react'
import NavBar from './NavBar.jsx'
import AnyChart from 'anychart-react'

const complexSettingsBar = {
    width: 800,
    height: 600,
    type: 'column',
    data: "P1,10\nP2,3\nP3,6\nP4,4",
    title: 'Column chart',
    yAxis: [1, {
      orientation: 'right',
      enabled: true,
      labels: {
        format: '{%Value}{decimalPoint:\\,}',
        fontColor: 'green'
      }
    }],
    legend: {
      background: 'lightgreen 0.4',
      padding: 10
}}
const complexSettingsPay = {

    type: 'column',
    data: "P1,10\nP2,3\nP3,6\nP4,4",
    title: 'Column chart',
    yAxis: [1, {
      orientation: 'right',
      enabled: true,
      labels: {
        format: '{%Value}{decimalPoint:\\,}',
        fontColor: 'green'
      }
    }],
    legend: {
      background: 'lightgreen 0.4',
      padding: 10
}}

function Grafics() {


    return (
        <>
        <NavBar/>
<br></br>
<br></br>
                                                  
         <AnyChart
    {...complexSettingsBar}
  />  
     
</>
        );}

  export default Grafics;
