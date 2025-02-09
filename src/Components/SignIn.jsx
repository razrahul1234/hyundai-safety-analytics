import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    });
    const navigate = useNavigate();


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data:', formData);
        navigate('/homepage');
    };

    return (
        <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <h2 style={{ fontWeight: 100 }}>Hyundai Safety Analytics</h2>
            <p style={{ fontWeight: 100 }}>Sign In</p>
            <br />
            <FormControl variant="outlined">
                <InputLabel htmlFor="input-with-icon-adornment">
                    Username
                </InputLabel>
                <Input
                    id="username-with-icon"
                    type='text'
                    name='userName'
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                    value={formData.userName}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl variant="outlined">
                <InputLabel htmlFor="input-with-icon-adornment">
                    Password
                </InputLabel>
                <Input
                    id="password-with-icon"
                    type='password'
                    name='password'
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </FormControl>
            <Stack direction="column" spacing={2}>
                <Button style={{ width: '216px', margin: 'auto' }} variant="contained" color='info' onClick={handleSubmit}>Login</Button>
                {/* <Button>Primary</Button>
                <Button disabled>Disabled</Button>
                <Button href="#text-buttons">Link</Button> */}
            </Stack>
        </Box>
    )
}

export default SignIn;