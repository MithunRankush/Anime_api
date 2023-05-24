
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Animedetails from './components/Animedetails';
import Searchanime from './components/Searchanime';

function App() {
  return(
    <BrowserRouter>
    <div className='App'>
    <Navbar></Navbar>
    <Switch>
      <Route exact path="/">
      <Home></Home>
      </Route>

      <Route path="/Animedetails:id">
       <Animedetails></Animedetails>
      </Route>

      <Route path="/search:searchKey">
      <Searchanime></Searchanime>
      </Route>
    </Switch>
    </div>
    </BrowserRouter>
  )
  
}

export default App;
