import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockPersonIcon from "@mui/icons-material/LockPerson";

export default function RegisterBox() {
    return (
        <Box component="form" sx={{
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
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle/>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <FormControl variant="standard">
                <InputLabel htmlFor="input-password">
                    E-mail
                </InputLabel>
                <Input
                    id="input-password"
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

                <Button variant="contained" href="/login" sx={{
                    marginRight: 1
                }}>Login</Button>
                <Button variant="contained" href="/" color="success">Profile</Button>
                <Button variant="contained" color="secondary" type="submit" sx={{
                    marginLeft: 1
                }}>Register</Button>
            </Box>
        </Box>
    );
}