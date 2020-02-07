import React from 'react';
import './App.scss';
import Provider from './context'
import Home from './componnet/home'
import {BrowserRouter as Router  ,Route ,Switch ,Link}from 'react-router-dom' ;
import Chart from './componnet/Chart';
import TopBar from './componnet/topBar' ;
import Footer from './componnet/Footer' ;


function App(props) {
 

  return (
    <Provider>
        
      <Router>
          <div className="App">
          <TopBar />
            <Switch>
              <Route path="/React-dark-sky-clone/charts" component={Chart} />
              <Route path="/React-dark-sky-clone" component={Home}/>
            </Switch>
           <Footer/>
          </div>
       
      </Router>
       
    </Provider>
  
  );
}

export default App;
