import React from 'react';
import {Chart as Chartjs,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,ArcElement,Legend} from 'chart.js';
import {Doughnut,Line} from "react-chartjs-2";

Chartjs.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,ArcElement,Legend);

export const LineChart = () => {
  const labels = getLastYearMonths();

  const options = {
      responsive:true,
      plugins:{
        legend:{
          position:'bottom'
        },
        title:{
          display: true,
          text:"Yearly Views"
        }
      }
  }

  const data = {
    labels,
    datasets:[
      {
        label:"Views",
        data:[1,2,3,4],
        borderColor:"green",
        backgroundColor:"green",
      }
    ]
  }

  return (
    <>
      <Line options={options} data={data}/>
    </>
  )
}


export const DougnutChart = () => {

  const data = {
    labels:["Subscribed","Not Subscribed"],
    datasets:[
      {
        label:"Views",
        data:[3,20],
        borderColor:["rgb(62,12,171)","rgb(214,43,129)"],
        backgroundColor:["rgb(62,12,171,0.3)","rgb(214,43,129,0.3)"],
      }
    ]
  }
  
  return (
    <>
      <Doughnut data={data}/>
    </>
  )
};

function getLastYearMonths(){
   const labels=[];

   const months = [
     'January',
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December"
   ];

   const currentMonth =  new Date().getMonth();
   const remain = 11-currentMonth;

   for (let i = currentMonth; i < months.length; i--){
      const element = months[i];
      labels.unshift(element);
      if(i===0)break;
   }

  //  console.log(labels);

   for (let i = 11; i > remain; i--){
      const element = months[i];
      labels.unshift(element);
      if(i === currentMonth)break;
   }

   return labels;
}




