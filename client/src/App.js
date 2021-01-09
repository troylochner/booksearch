import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//IMPORT ALL COMPONENTS FOR NOW (NOT SUPER EFFICIENT BUT WHATEVER)
import Header from "./components/header";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import Results from "./components/results";
import BookInfo from "./components/book-info";
import SearchBar from "./components/searchbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navigation/>
          <Header/>

          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

        </div>

        <SearchBar/>
        <Results/>
        <BookInfo/>

       


        <Footer/>
      </div>
   
    );
  }
}

export default App;
