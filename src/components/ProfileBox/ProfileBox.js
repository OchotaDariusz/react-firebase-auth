import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ProfileBox() {
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
            }}>Profile</Box>
            <Button variant="contained" href="/login" sx={{
                marginRight: 1
            }}>Login</Button>
            <Button variant="contained" color="secondary" href="/register" sx={{
                marginLeft: 1
            }}>Register</Button>
        </Box>
    );
}