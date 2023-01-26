import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileBox from './components/ProfileBox/ProfileBox'
import LoginBox from './components/LoginBox/LoginBox'
import RegisterBox from './components/RegisterBox/RegisterBox'
import './App.css';

function App() {
    const [user, setUser] = useState("Logged Out.")

    return (
        <div className="content">
                <Routes>
                    <Route path="/" element={<ProfileBox user={user} setUser={setUser} />}/>
                    <Route path="login" element={<LoginBox setUser={setUser} />}/>
                    <Route path="register" element={<RegisterBox setUser={setUser} />}/>
                </Routes>
        </div>
    );
}

export default App;
