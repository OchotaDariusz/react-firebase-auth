import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {auth} from "../../firebase.js";
import {signOut, onAuthStateChanged} from "firebase/auth";

function ProfileBox({ user, setUser }) {
    const history = useHistory()

    const logout = () => {
        signOut(auth).then(() => {
            console.log('Logged out.')
        }).catch((error) => {
            console.error('Error when logging out.')
            console.error(error.message)
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user.email)
            } else {
                setUser("Logged Out.")
            }
        })
    }, [setUser])

    return (
        <Box component="span" sx={{
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
                color: '#2E7D32'
            }}>{user}</Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 2
            }}>
                <Button variant="contained" onClick={()=>history.push('/login')} sx={{
                    marginRight: 1
                }}>Login</Button>
                <Button variant="contained" onClick={logout} color="error">Log Out</Button>
                <Button variant="contained" color="secondary" onClick={()=>history.push('/register')} sx={{
                    marginLeft: 1
                }}>Register</Button>
            </Box>
        </Box>
    );
}

export default ProfileBox