import React ,{useContext}from 'react';
import {Context} from '../context' ;
import sunSet from '../asset/sunset.png' ;
import sunRise from "../asset/sunrise.png";


export default function HidenInformations({hidenInformation}) {
    const {maxTem,minTem,maxTime,minTime,riseTime,setTime,show,summary} =hidenInformation ;

 
    return (
        <div className="collapsible" style={{
            display:show?"block":"none",
            opacity:show?1:0
            }}>

                <p>{summary}</p>
                <div className="sun__informatioon">
                  <p><span>{minTem }° C </span>{minTime.getHours()}:00 &rarr; <span>{maxTem}° C </span>{maxTime.getHours()}:00</p>

                    <div className="sun__set__rise">
                      
                            
                            <p><img src={sunRise} alt ="img"/> {riseTime.getHours()}:{ riseTime.getMinutes()<10?`0${setTime.getMinutes()}`:riseTime.getMinutes() }</p>
                   
                     
                          
                            <p>  <img src={sunSet} alt ="img"/> {setTime.getHours()}:{setTime.getMinutes()<10 ? `0${setTime.getMinutes()}`: setTime.getMinutes() }</p>
                      
                      </div>
                </div>
               

        </div>
    )
}
