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
import state from "./state";



const App=()=> {
  return (
    <div className="App">
      <div className="portfolio">
          {/*<Header state={state.headerBlock}/>*/}
          <Header state={state.headerBlock}/>
          <Main state={state.mainBlock}/>
          <Skills state={state.skillsBlock}/>
          <Projects state={state.projectsBlock}/>
          <Slogan state={state.sloganBlock}/>
          <Contacts state={state.contactBlock}/>
          <Footer state={state.footerBlock}/>
      </div>
    </div>
  );
}

export default App;
