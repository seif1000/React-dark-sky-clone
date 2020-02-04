import React,{useContext} from 'react'
import {Context} from '../context' ;
import Axios from 'axios'
const TopBar =(props)=>  {
    const [weather,setWeather] = useContext(Context) ;
 //   console.log(weather.currently) ;

    const getLocation = ()=>{
  
        navigator.geolocation.getCurrentPosition(function(position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            setWeather(weather=>({
                ...weather,
                latitude:lat ,
                longitude:long
            }))
            Axios.get(`https://geocode.xyz/${lat},${long}?json=1`)
                 .then(res=>{

                  setWeather(weather=>({
                    ...weather,
                    city:res.data.city,
                    province:res.data.staddress
                }))
                 
                 })
                 .catch(err=>{
                     console.log(err)
                 })
          });
    
        }    

    return (
        <div className="top__bar">
            <div className="brand__bar">
                React Weather app
            </div>
            <div className ="location__city">
                   <div className="location" onClick={getLocation}>
                        <i className="fas fa-location-arrow"></i>
                    </div>
                    <div className="city" >
                        <p>{weather.province},{weather.city}</p>  
                    </div>
            </div>
            <div className="weather__information">
                <div className="information">
                      <p> <span>Wind:</span> {weather.currently.windSpeed } mph</p>
                </div>
                <div className="information">
                      <p> <span>Humidity:</span> {weather.currently.humidity *100}%</p>
                </div>
                <div className="information">
                      <p> <span>Dew Pt:</span> {weather.currently.dewPoint}°</p>
                </div>
                <div className="information">
                      <p> <span>UV Index:</span> {weather.currently.uvIndex}</p>
                </div>
                <div className="information">
                      <p> <span>Visibility:</span> {weather.currently.visibility}+ mi</p>
                </div>
                <div className="information">
                      <p> <span>Pressure:</span> {weather.currently.pressure} mb</p>
                </div>
            </div>
               
        </div>
    )
}

export default TopBar ;
