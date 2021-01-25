import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar/>
            <div className="app-main">
                <Route path='/profile' render={() => <Profile />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>

    );
};

export default App;
