import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout';
import NavHeader from './components/navheader';


function App() {
  return (
    <div className="App">
        <NavHeader/>
        <Layout/>
    </div>
  )
}

export default App;
