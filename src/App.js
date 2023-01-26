import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Fade from '@mui/material/Fade'
import ProfileBox from './components/ProfileBox/ProfileBox'
import LoginBox from './components/LoginBox/LoginBox'
import RegisterBox from './components/RegisterBox/RegisterBox'
import './App.css';

function App() {
    return (
        <div className="content">

                <Routes>
                    <Route path="/" element={<ProfileBox/>}/>
                    <Route path="login" element={<LoginBox/>}/>
                    <Route path="register" element={<RegisterBox/>}/>
                </Routes>
        </div>
    );
}

export default App;
