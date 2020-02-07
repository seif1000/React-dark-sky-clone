import React ,{useContext} from 'react' ;
import {Context} from '../context' ;
import {Line} from "react-chartjs-2" ;
import HidenInformations from './HidenInformations';


export default function Chart() {
    const [weather,setWeather] = useContext(Context) ;
     const hourly = JSON.parse(localStorage.getItem('hourly')) ;
     const daily = JSON.parse(localStorage.getItem('daily'))  ;
  
   let today ;
   
       today = daily[0] ;
   
   
    console.log('daily',today) ;
    console.log(daily,hourly) ;


    const time = new Date(today.time*1000) ;
    const minTime =  new Date(today.apparentTemperatureMinTime *1000) ;
    const maxTime =  new Date(today.apparentTemperatureMaxTime *1000) ;
    const riseTime = new Date(today.sunriseTime *1000) ;
    const setTime = new Date(today.sunsetTime *1000) ;
    const minTem  =today.apparentTemperatureMin ;
    const maxTem = today.apparentTemperatureMax ;
    const hidenInformation  = {
        minTime,
        maxTime,
        riseTime,
        setTime,
        maxTem,
        minTem,
        show:weather.show,
        show:true,
        summary:today.summary
    }

    const myHoure = hourly.slice(0,24) ;
    let myHoureLabls =[] ;
    let myDataTem = [] ;
    let myDataProbability =[] ;
    let myDataHumidity = [] ;
    let myDataDewPoint = [] ;
    let myDataWind = [] ;
    let myDataUvIndex = [] ;
    let myDataPressure = [] ;
    let myDataVisibility = [] ;
        myHoure.map((item,i)=>{
            
              
              if(i%2===0){
                const time = new Date(item.time*1000) ;
                myHoureLabls.push(`${time.getHours()}:${time.getMinutes()}0 `) ;
                myDataTem.push((item.temperature-32 ) * 5/9)
                myDataProbability.push(item.precipProbability*100); 
                myDataHumidity.push(item.humidity*100) ;
                myDataDewPoint.push(item.dewPoint) ;
                myDataWind.push(item.windSpeed) ;
                myDataUvIndex.push(item.uvIndex) ;
                myDataVisibility.push(item.visibility) ;
                myDataPressure.push(item.pressure) ;
              }
              return myHoureLabls ;
    })
    console.log(myHoureLabls.length) ;
    
    const dataTem = {
        labels: myHoureLabls,
        datasets: [
          {
            label: 'temprature',
            lineTension: 0.1,
            backgroundColor: '',
            borderColor: 'black',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: 'black',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 3,
            pointRadius:5,
            pointHitRadius: 10,
            data: myDataTem
          }
        ]
      };
      
      const dataProb = {
        labels: myHoureLabls,
        datasets: [
          {
            label: 'temprature',
            lineTension: 0.1,
            backgroundColor: '',
            borderColor: 'black',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: 'black',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 3,
            pointRadius:5,
            pointHitRadius: 10,
            data: myDataProbability
          }
        ]
      };
      const dataUv = {
        labels: myHoureLabls,
        datasets: [
          {
            label: 'temprature',
            lineTension: 0.1,
            backgroundColor: '',
            borderColor: 'black',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: 'black',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 3,
            pointRadius:5,
            pointHitRadius: 10,
            data: myDataUvIndex
          }
        ]
      };
      const dataVisi = {
        labels: myHoureLabls,
        datasets: [
          {
            label: 'temprature',
            lineTension: 0.1,
            backgroundColor: '',
            borderColor: 'black',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: 'black',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 3,
            pointRadius:5,
            pointHitRadius: 10,
            data: myDataVisibility
          }
        ]
      };
      const dataWInd= {
        labels: myHoureLabls,
        datasets: [
          {
            label: 'temprature',
            lineTension: 0.1,
            backgroundColor: '',
            borderColor: 'black',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: 'black',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 3,
            pointRadius:5,
            pointHitRadius: 10,
            data: myDataWind
          }
        ]
      };
      const dataHu = {
        labels: myHoureLabls,
        datasets: [
          {
            label: 'temprature',
            lineTension: 0.1,
            backgroundColor: '',
            borderColor: 'black',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: 'black',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 3,
            pointRadius:5,
            pointHitRadius: 10,
            data: myDataHumidity
          }
        ]
      };
      
      const dataDew = {
        labels: myHoureLabls,
        datasets: [
          {
            label: 'temprature',
            lineTension: 0.1,
            backgroundColor: '',
            borderColor: 'black',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: 'black',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 3,
            pointRadius:5,
            pointHitRadius: 10,
            data: myDataDewPoint
          }
        ]
      };
      const dataPre = {
        labels: myHoureLabls,
        datasets: [
          {
            label: 'temprature',
            lineTension: 0.1,
            backgroundColor: '',
            borderColor: 'black',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: 'black',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 3,
            pointRadius:5,
            pointHitRadius: 10,
            data: myDataPressure
          }
        ]
      };
      
      
      
    return (

        <div className="chart__detils">
          <div className="details">
          <HidenInformations hidenInformation={hidenInformation } />  
          </div> 
           <div className="charts">
              <div className="chart">
                  <p>Temperature</p>
                  <Line data={dataTem}/>
              </div>
              <div className="chart">
                  <p>Percip Probability</p>
                  <Line data={dataProb}/>
              </div>
              <div className="chart">
                  <p>Humidity</p>
                  <Line data={dataHu}/>
              </div>
              <div className="chart">
                  <p>Dew Point</p>
                  <Line data={dataDew}/>
              </div>
              <div className="chart">
                  <p>Wind</p>
                  <Line data={dataWInd}/>
              </div>
              <div className="chart">
                  <p>Atmospheric Pressure</p>
                  <Line data={dataPre}/>
              </div>
              <div className="chart">
                  <p>UV Index</p>
                  <Line data={dataUv}/>
              </div>
              <div className="chart">
                  <p>Visisbility</p>
                  <Line data={dataVisi}/>
              </div>
            
         
           </div>
           
        </div>
    )
}
