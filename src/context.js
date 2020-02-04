import React,{useState} from 'react';

export const Context = React.createContext();

 const Provider = ({children}) =>{
    const initialState = {
         latitude:"21.422510" ,
         longitude:"39.826168",
         daily:[],
         currently:{} ,
         city:"mekka",
         province:"mekka"
    }

    const [user,setWeather] = useState(initialState);

    return (
       <Context.Provider value={[user,setWeather]}>{children}</Context.Provider>
    )
}

export default Provider;