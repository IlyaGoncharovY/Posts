import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import {Posts} from "./components/postsList/Posts";
import {PATH} from "./utils/path";
import {AboutMe} from "./components/aboutMe/AboutMe";
import {InfoUser} from "./components/postsList/postItem/userDetails/InfoUser";
import {Header} from "./components/header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={PATH.POST_PAGE} element={<Posts/>}/>
                <Route path={PATH.ABOUT_ME} element={<AboutMe/>}/>
                <Route path={`${PATH.INFO_USER}/:userId`} element={<InfoUser/>} />
                <Route path={PATH.MAIN} element={<Navigate to={PATH.POST_PAGE}/>}/>
            </Routes>
        </div>
    );
}

export default App;
