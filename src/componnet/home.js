import React,{useContext,useEffect} from 'react' ;
import {Context} from '../context'
import TopBar from "./topBar" ;
import Axios from 'axios';

const  Home =(props)=> {
    const [weather,setWeather ] = useContext(Context);
    const herukuCors = "https://cors-anywhere.herokuapp.com/" ;
    const darkSky = "https://api.darksky.net/forecast/" ;
    const myKey = "d91c7708406f81bd0ba5b2dd83c1816b" ;
   
  const fetchData = ()=>{
      Axios
      .get(`${herukuCors}${darkSky}${myKey}/${weather.latitude},${weather.longitude}?lang=ar&exclude="hourly,flags"`)
      .then(res=>{
          console.log(res.data)
          setWeather(weather=>({

              ...weather,
              currently:res.data.currently
          }))
      })
  }
  useEffect(()=>{fetchData()},[]) ;
    return (
        <div>
            <TopBar />
        </div>
    )
}

export default Home ;
