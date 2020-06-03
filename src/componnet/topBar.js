import React,{useContext,useEffect} from 'react'
import {Context} from '../context' ;
import {Link} from 'react-router-dom' ;
import Axios from 'axios'
import {useLocation} from 'react-router-dom'
import logo from '../asset/logo.png'
import githube from '../asset/github.png'
const TopBar =(props)=>  {
    const [weather,setWeather] = useContext(Context) ;
 
    const herukuCors = "https://cors-anywhere.herokuapp.com/" ;
    const darkSky = "https://api.darksky.net/forecast/" ;
    const myKey = "d91c7708406f81bd0ba5b2dd83c1816b" ;
   
    const fetchData = (lat,long)=>{

        Axios
        .get(`${herukuCors}${darkSky}${myKey}/${lat},${long}?exclude="flags"`)
        .then(res=>{
            localStorage.setItem('daily',JSON.stringify(res.data.daily.data.slice(1,8))) ;
            localStorage.setItem('hourly',JSON.stringify(res.data.hourly.data)) ;
            setWeather(weather=>({
                ...weather,
                currently:res.data.currently ,
                hourly:res.data.hourly.data,
                daily:res.data.daily.data.slice(1,8),
                summary:res.data.hourly.summary
            })
            )}
            )}
    const {pathname} = useLocation();
  
    useEffect(()=>{
        let lat,longt ;
        if(JSON.parse(localStorage.getItem("lat"))!=null && JSON.parse(localStorage.getItem("longt"))!=null  ){
              lat = JSON.parse(localStorage.getItem("lat")) ;
              longt = JSON.parse(localStorage.getItem("longt")) ;
        }else{
            lat = weather.latitude ;
            longt = weather.longitude ;
        }
        fetchData(lat,longt) ;
    },[]) ;


    const getLocation = ()=>{
  
        navigator.geolocation.getCurrentPosition(function(position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            localStorage.setItem("lat",JSON.stringify(lat)) ;
            localStorage.setItem('longt',JSON.stringify(long)) ;
            console.log(lat,long) ;
            setWeather(weather=>({
                ...weather,
                latitude:lat ,
                longitude:long
            }))
            Axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}&zoom=18&addressdetails=1`)
                 .then(res=>{
                     if(res.data){
                        console.log(res.data)
                           localStorage.setItem('city' ,JSON.stringify(res.data.address.state));
                           localStorage.setItem('province',JSON.stringify(res.data.address.town))
                     }
               
                 return setWeather(weather=>({
                    ...weather,
                    city:res.data.address.state,
                    province:res.data.address.city
                
                }))
              
                 })
                 .then(()=>{
                     fetchData(lat,long) ;
                 })
                 .catch(err=>{
                     console.log(err)
                 })
          });
    
        }    
        let city,province ;
        if(JSON.parse(localStorage.getItem("city"))!=null && JSON.parse(localStorage.getItem("province"))!=null ){
           city = JSON.parse(localStorage.getItem("city")) ;
           province  = JSON.parse(localStorage.getItem("province")) ;
        }else{
             city = weather.city;
             province = weather.province ;
        }
       
    return (
        <div className="top__bar">
            <div className="brand__bar">
                 <Link className="link one" to="/React-dark-sky-clone">
                      <img src={logo} alt="logo" />
                      <span>Sweety </span>
                 </Link>
                 <Link  to="/React-dark-sky-clone" className="link">Home</Link>
                <a href="https://github.com/seif1000/React-dark-sky-clone" className="link" target="_blank" ><img src={githube} alt="git"/></a>
            </div>
            <div className ="location__city">
                   <div  className="location" onClick={getLocation} style={{
                       display:pathname==="/React-dark-sky-clone/charts"?"none":"block"
                       }}>
                        <i className="fas fa-location-arrow"></i>
                    </div>
                    <div className="city" >
                        <p>{province},{city}</p>  
                    </div>
            </div>
            <div className="weather__information">
                <div className="information">
                      <p> <span>Wind:</span> {weather.currently.windSpeed } mph</p>
                </div>
                <div className="information">
                      <p> <span>Humidity:</span> {(weather.currently.humidity *100).toFixed(0)}%</p>
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
