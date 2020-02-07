import React,{useState} from 'react';

export const Context = React.createContext();

 const Provider = ({children}) =>{
    const initialState = {
         latitude:"21.422510" ,
         longitude:"39.826168",
         daily:[],
         currently:{} ,
         hourly:[],
         city:"mekka",
         summray:"" ,
         province:"mekka",
         show:false 
    }

    const [weather,setWeather] = useState(initialState);

    return (
       <Context.Provider value={[weather,setWeather]}>{children}</Context.Provider>
    )
}

export default Provider;