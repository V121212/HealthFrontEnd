 import React from 'react'
 import { Chart as ChartJS } from 'chart.js/auto';
 import {Bar , Doughnut , Line} from 'react-chartjs-2';

 import ChartData from "../data/ChartData.json"

 function Graphs() {
   return (
     <div className=' flex flex-col gap-12 min-h-screen bg-slate-200'>
      <div className='flex flex-row gap-20'>  
        <div className=' w-96 h-80 broder-3  shadow-2xl  border-slate-100'> 
               <Bar 
                  data={{
                    labels:["A","B","C"],  //the x axis values
                    datasets:[
                        {
                            label : "intake",
                            data : [10,20,30]
                        },
                        {
                            label : "burn",
                            data : [8,15,25]
                        },
                    ]
                  }}
               /> 
        </div>

        <div className= "w-96 h-80 broder-3  shadow-2xl  border-slate-100">
           <Bar
              data={{
                labels: ChartData.map((data) => data.label) ,  //the x axis values
                datasets:[
                    {
                        label : "intake",
                        data :  ChartData.map((data) => data.valueIn),
                        borderRadius:5,
                        backgroundColor:"gray",
                    },
                    {
                        label : "burn",
                        data :  ChartData.map((data) => data.valueOut),
                        backgroundColor:"green",
                    },
                ]
              }}
           />
        </div>
      </div>

    <div className='flex flex-row gap-20'>
        <div>
           <Doughnut
              data={{
                labels: ChartData.map((data) => data.label) ,  //the x axis values
                datasets:[
                    {
                        label : "intake",
                        data :  ChartData.map((data) => data.valueIn),
                        backgroundColor:[
                            "green","blue","yellow"
                        ]
                    },
                ]
              }}
           />
        </div>

        <div className=' w-1/3'>
           <Line
              data={{
                labels: ChartData.map((data) => data.label) ,  //the x axis values
                datasets:[
                    {
                        label : "intake",
                        data :  ChartData.map((data) => data.valueIn),
                        backgroundColor:[
                            "green","blue","yellow"
                        ]
                    },
                ]
              }}
           />
        </div>
    
    </div>
     
     </div>
   )
 }
 
 export default Graphs