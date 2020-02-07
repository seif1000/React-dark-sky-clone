import React ,{useContext} from 'react' ;
import {Context} from "../context"  ;
import OneDay from "./OneDay" ;

const Weekly =()=> {

     const [weather,setWeather] = useContext(Context) ;

     const daily = weather.daily.map((item,i)=>{

         return (
         <OneDay key={item.time} item={item} i={i}/>
         ) ;
     })
    return (
        <div className="information__daily">
    
             {daily}
        </div>
    )
}
export default Weekly ;