import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import {Posts} from "./components/postsList/Posts";
import {PATH} from "./utils/path";
import {AboutMe} from "./components/aboutMe/AboutMe";
import {InfoUser} from "./components/userDetails/InfoUser";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={PATH.POST_PAGE} element={<Posts/>}/>
                <Route path={PATH.ABOUT_ME} element={<AboutMe/>}/>
                <Route path={PATH.INFO_USER} element={<InfoUser/>}/>
                <Route path={PATH.MAIN} element={<Navigate to={PATH.POST_PAGE}/>}/>
            </Routes>
        </div>
    );
}

export default App;
