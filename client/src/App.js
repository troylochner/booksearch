import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//use react browser routher
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
//keep hashrouter handy - as I had a previous issue with this :
//import { HashRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom'

import Search from "./pages/Search"
import SavedBook from "./pages/SavedBook"  


//IMPORT ALL COMPONENTS FOR NOW (NOT SUPER EFFICIENT BUT WHATEVER)
import Header from "./components/header";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import Results from "./components/results";



class App extends Component {
  render() {
    return (
    
        <Router>
          <Search/>
        </Router>

    );
  }
}

export default App;
