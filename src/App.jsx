import React from 'react';
import './App.css';
import About from './components/About';
import Privacy from './components/Privacy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <About />
      <Privacy />
      <Footer />
    </div>
  );
}

export default App;