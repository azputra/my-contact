import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'

// PAGE
import ContactAll from './views/ContactAll';

// COMPONENT
import Navbar from './components/Navbar';
import CategoryContact from './views/CategoryContact';
import DetailContact from './views/DetailContact';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<ContactAll/>} />
      <Route exact path="/:category" element={<CategoryContact/>}/>
      <Route exact path="/detail/:id" element={<DetailContact/>}/>
    </Routes>
    </>
  );
}

export default App;
