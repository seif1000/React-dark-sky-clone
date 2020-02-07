import React from 'react' ;
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


export default function OneHoure(props) {
    const time = new Date(props.item.time*1000) ;
   // console.log(props.item) ;
    let icone ;
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
  const temperature = (props.item.temperature -32)*5/9 ;
    return (
        <div className="houre">
          <p>{time.getHours()}:{time.getMinutes()}0</p> 
          <img src={icone} alt="img"/>
          <p>{props.item.summary}</p>
          <p>{temperature.toFixed(0)}° C</p>

        </div>
    )
}
