import React,{useContext} from 'react' ;
import {Context} from '../context' ;
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


const Day =()=> {
    const [weather,setWeather] = useContext(Context)
    let icone ;
    switch (weather.currently.icon) {
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
    const temarature = (weather.currently.temperature-32)*5/9  ;
    const feelsLike = (weather.currently.apparentTemperature-32)*5/9 ;
    return (
        <div className="day__information">
            <div className="general__information" >
                <div className="icon">
                     <img src={icone} alt="sun"/>
                </div>
                <div className="numeric">
                         <p className="principal">{temarature.toFixed(0)}°C {weather.currently.icon}.</p>
                         <p className="secondair"><span>Feels Like: </span>{feelsLike.toFixed(0)}˚ C</p>
                </div>

            </div>
            <div className="summury">
                <p>{weather.summary} </p>
            </div>
            
        </div>
    )
}

export default Day ;
