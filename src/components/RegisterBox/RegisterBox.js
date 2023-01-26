import React, { useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { auth } from "../../firebase.js";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

function RegisterBox({ setUser }) {
    const loginRef = useRef()
    const passwordRef = useRef()
    const history = useHistory()

    const register = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, loginRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                setUser(userCredential.user.email)
            })
            .catch((error) => {
                console.error('Cannot create account.')
                console.error(error.message)
            })
        history.push('/')
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) history.push('/')
        })
    })

    return (
        <Box component="form" onSubmit={register} sx={{
            p: 2,
            boxShadow: '0 0 5px 5px #eee',
            borderRadius: '4px',
            background: '#eee'
        }}>
            <Box component="h1" sx={{
                display: 'flex',
                justifyContent: 'center',
                pb: 2,
                mt: 1,
                color: '#002884'
            }}>Register</Box>
            <FormControl variant="standard">
                <InputLabel htmlFor="input-login">
                    E-mail
                </InputLabel>
                <Input
                    id="input-login"
                    inputRef={loginRef}
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle/>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <FormControl variant="standard">
                <InputLabel htmlFor="input-password">
                    Password
                </InputLabel>
                <Input
                    id="input-password"
                    inputRef={passwordRef}
                    type="password"
                    startAdornment={
                        <InputAdornment position="start">
                            <LockPersonIcon/>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 2
            }}>

                <Button variant="contained" onClick={()=>history.push('/login')} sx={{
                    marginRight: 1
                }}>Login</Button>
                <Button variant="contained" onClick={()=>history.push('/')} color="success">Profile</Button>
                <Button variant="contained" color="secondary" type="submit" sx={{
                    marginLeft: 1
                }}>Register</Button>
            </Box>
        </Box>
    );
}

export default RegisterBox