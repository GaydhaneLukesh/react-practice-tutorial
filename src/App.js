import React from 'react';
import './App.css';
import './styles.css';
import Welcome from './components/greetings/Welcome';

function App() { 
  let userName = "I am John Doe, learning React.";
  return (
    <React.Fragment>
      <Welcome name={userName} />
      <div style={{marginBottom : '50px'}}/>
    </React.Fragment>
  );
}

export default App;
