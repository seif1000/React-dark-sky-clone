import React, { useState } from 'react' ;
import clearDay from '../asset/sun.png' ;
import clearNight from '../asset/moon.png' ;
import rain from '../asset/rain.png' ;
import snow from '../asset/snowy.png' ;
import sleet from '../asset/sleet.png' ;
import wind from '../asset/wind.png' ;
import fog from "../asset/fog.png" ;
import cloudly from "../asset/cloudy.png" ;
import partlyCloudDay  from "../asset/partlycloud.png" ;
import partlyCloudNight from '../asset/night.png' ;
import {Context} from '../context' ;
import HidenInformations from './HidenInformations';


 const OneDay = (props)=> {
     
    
     const [weather,setWeather] = useState(Context) ;

     const time = new Date(props.item.time*1000) ;
     const minTime =  new Date(props.item.apparentTemperatureMinTime *1000) ;
     const maxTime =  new Date(props.item.apparentTemperatureMaxTime *1000) ;
     const riseTime = new Date(props.item.sunriseTime *1000) ;
     const setTime = new Date(props.item.sunsetTime *1000) ;
     const minTem  =((props.item.apparentTemperatureMin -32)*5/9).toFixed(0) ;
     const maxTem = ((props.item.apparentTemperatureMax -32)*5/9).toFixed(0);
     const hidenInformation = {
         minTime,
         maxTime,
         riseTime,
         setTime,
         maxTem,
         minTem,
         show:weather.show,
         summary:props.item.summary
     }
     let icone ,day;
     switch (props.item.icon) {
        case "clear-day" :
            icone = clearDay ;
            break;
    
        case "clear-night":
            icone = clearNight ;
            break;
        case "rain":
            icone = rain ;
            break;
        case "snow" :
            icone = snow ;
            break;
        case "sleet" :
            icone = sleet; 
            break;
        case "wind":
            icone = wind ;
            break;
        case "fog":
            icone = fog ;
            break;
        case "cloudy":
            icone = cloudly ;
            break;
    
        case "partly-cloudy-day":
            icone = partlyCloudDay ;
            break;
        case "partly-cloudy-night":
            icone = partlyCloudNight ;
            break;
    
    

        default:
            break;
    }
    if(props.i === 0){
        day = 'today' ;
    }else{
        switch (time.getDay()) {
            case 0 :
                day = "Sun" ;
                break;
        
            case 1:
                day = "Mon" ;
                break;
            case 2:
                day = "Tue" ;
                break;
            case 3 :
                  day = "Wed" ;
                break;
            case 4 :
                day= "Thu"; 
                break;
            case 5:
                day = "Fri" ;
                break;
            case 6:
                day="Sat" ;
                break;
       
            default:
                break;
        }
    }
    
   function showCollapsible(){
        if(weather.show){
            setWeather((weather)=>({
                ...weather,
                show:false
            }))
        }else{
            setWeather((weather)=>({
                ...weather,
                show:true
            }))

        }
    }
    const width = (props.item.apparentTemperatureMax +props.item.apparentTemperatureMin )/2 ;
    
    return (
        <div className="day__container">
                <div className={weather.show?"one___day active":"one___day"} onClick={showCollapsible.bind(this)}>
                    <div className="day">
                        <img  src={icone} alt="img"/>
                        <p className="day">{day}</p>
                    </div>
                    <div className="information">
                        <p>{((props.item.apparentTemperatureMax-32)*5/9).toFixed(0)}° C</p>
                        <div className="taux">
                            <div className="after" style={{width: width}}>

                            </div>
                        </div>
                        <p>{((props.item.apparentTemperatureMin-32)*5/9).toFixed(0)}° C</p>
                    </div>
                    <div className="toggle">
                        <i className={weather.show?"fas fa-minus-circle":"fas fa-plus-circle"}></i>
                    </div>
                
                </div>
                 <HidenInformations hidenInformation={hidenInformation} />
        </div>
       
    )
}

export default OneDay ;
