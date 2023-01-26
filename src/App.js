import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProfileBox from './components/ProfileBox/ProfileBox'
import LoginBox from './components/LoginBox/LoginBox'
import RegisterBox from './components/RegisterBox/RegisterBox'
import './App.css';

function App() {
    const [user, setUser] = useState("Logged Out.")

    return (
        <div className="content">
                <Switch>
                    <Route exact path="/" render={() => <ProfileBox user={user} setUser={setUser} />}/>
                    <Route exact path="/login" render={() => <LoginBox setUser={setUser} />}/>
                    <Route exact path="/register" render={() => <RegisterBox setUser={setUser} />}/>
                    <Route path="*" render={() => <Redirect to={"/"} />} />
                </Switch>
        </div>
    );
}

export default App;
