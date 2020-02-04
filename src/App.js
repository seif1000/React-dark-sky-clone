import React from 'react';
import './App.scss';
import Provider from './context'
import Home from './componnet/home'

function App(props) {
 

  return (
    <Provider>
      <div className="App">
          <Home/>
      </div>
    </Provider>
  
  );
}

export default App;
