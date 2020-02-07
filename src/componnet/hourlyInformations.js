import React ,{useContext} from 'react' ;
import {Context} from "../context" ;
import OneHoure from './OneHoure' ;
import{Link} from "react-router-dom" ;


const Hourly =()=> {
    const [weather,setWeather] = useContext(Context) ;
    const {hourly} = weather ;
    const houreItem = hourly.slice(0,10).map(item=>{
        return(
            <OneHoure key={item.time} item={item} />
        )
    })

    const style={
        textDecoration: "none" ,
        border:" none",
        background: "rgb(30, 144, 255)",
        color:" white",
        padding:"0.5em 1.5em ",
        fontSize:" 18px",
        borderRadius: "30px",
        fontWeight:" bold ",
        outline: "none" ,
        cursor: "pointer",
        transition: "all 0.5s",
    }
    return (
        <div  className="more__details" >
            <div className="hourly__information">
          {houreItem}

            </div>
            <Link className="button" style ={style}  to="/React-dark-sky-clone/charts">More Details</Link>
            <div className="separator"></div>
        </div>
       
    )
}

export default Hourly ;
