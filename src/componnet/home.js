import React from 'react' ;
import Day from './dayInformation' ;
import Hourly from './hourlyInformations';

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
