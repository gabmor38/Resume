import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import ContactInfo from './Components/Contact';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';

const Padding = {
  padding: "20px"
} 

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="columns">
        <div className="sidePanel">
          <ContactInfo />
          <Skills />
          <Education />
        </div>
        <div style={Padding}>
        <Experience/>
        </div>
      </div>
    </div>
  );
}

export default App;
