import React, { useEffect, useState } from "react";
import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

function Bartodo (){
    const [temp, setTemp] =useState([])
    const [intervalId, setIntervalID] = useState(0);

    const handleActive = () => {
      const newintervalId = setInterval(() => {
        peticionFech();
  
      }, 10000);
      setIntervalID(newintervalId);
    };

    const data ={
        labels:[...Array(temp.length).keys()],
        datasets:[{
            label:'habitantes',
            backgroundColor: 'rgba(0,255,0,1)',
            borderColor:'black',
            borderWidth:1,
            hoverBackgroundColor: 'rgba (0,255,0,0.2)',
            hoverBorderColor: '#ff0000',
            data:temp
        }]
    }
    const opcions ={
        maintainAspectRatio: false,
        responsive:true
    }
    const peticionFech= async ()=>{
        const response = await fetch(
            `http://3.144.72.54/api/data/view`
          );
          const data = await response.json();
          var temperatureAux =[]     
          data.map(elemento =>{
            temperatureAux.push(elemento.temperatura)
          })
          setTemp(temperatureAux);
          console.log(temperatureAux)
    }
    useEffect(()=>{
        handleActive();
    },[])
    return(
        <div>
            <Bar data={data} options1={opcions}/>
            
        </div>
    )
}

export default Bartodo;