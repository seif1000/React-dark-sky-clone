import React from 'react' ;
import TopBar from './topBar' ;
import Day from './dayInformation' ;
import Hourly from './hourlyInformations';
import OneDay from './OneDay';
import Weekly from './weekly';
const  Home =(props)=> {
   
  
    return (
        <div>
           
            <Day/>
            <Hourly/>
           <Weekly/>
        </div>
    )
}

export default Home ;
