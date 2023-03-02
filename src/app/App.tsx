import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import PasswordRecovery from "../components/PasswordRecovery/PasswordRecovery";
import NewPassword from "../components/NewPassword/NewPassword";
import Profile from "../components/Profile/Profile";
import Test from "../components/Test/Test";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Profile/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/password-recovery'} element={<PasswordRecovery/>}/>
                <Route path={'/new-password'} element={<NewPassword/>}/>
                <Route path={'/test'} element={<Test/>}/>
                <Route path={'/404'}
                       element={<h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>404 not
                           found</h1>}/>
                <Route path={'*'}
                       element={<Navigate to={'/404'}/>}/>
            </Routes>
        </div>
    );
}

export default App;
