import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Slogan from "./Slogan/Slogan";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import './App.css';
// import state from "./state";



const App=()=> {
  return (
    <div className="App">
      <div className="portfolio">
          {/*<Header state={state.headerBlock}/>*/}
          <Header/>
          <Main/>
          <Skills />
          <Projects />
          <Slogan />
          <Contacts />
          <Footer />
      </div>
    </div>
  );
}

export default App;
