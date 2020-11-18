import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
};

export default App;
