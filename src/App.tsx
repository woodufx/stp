import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import FirstLab from './pages/FirstLab/FirstLab';
import FivthLab from './pages/FivthLab/FivthLab';
import FourthLab from './pages/FourthLab/FourthLab';
import SecondLab from './pages/SecondLab/SecondLab';
import ThirdLab from './pages/ThirdLab/ThirdLab';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<FirstLab/>}></Route>
          <Route path="/lab2" element={<SecondLab/>}></Route>
          <Route path="/lab3" element={<ThirdLab/>}></Route>
          <Route path="/lab4" element={<FourthLab/>}></Route>
          <Route path="/lab5" element={<FivthLab/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
