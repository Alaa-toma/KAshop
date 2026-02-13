import React from 'react'
import {Box,AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as tolink } from 'react-router-dom'
import { Link } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

export default function Navbar() {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: '#333', '--Grid-borderWidth': '1px', borderBottom: 'var(--Grid-borderWidth) solid', borderColor: 'white' }} >
                <Toolbar sx={{ justifyContent: 'space-around' }}>


                    <Typography variant="h6" component="div" >
                        KA-Shop
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Link component={tolink} to={'/'} underline='none' color='inherit' > Home </Link>
                        <Link component={tolink} to={'/'} underline='none' color='inherit' > Shope </Link>
                        <Link component={tolink} to={'/'} underline='none' color='inherit' > About </Link>
                        <Link component={tolink} to={'/Login'} underline='none' color='inherit' > Log in </Link>
                        <Link component={tolink} to={'/Register'} underline='none' color='inherit' > Register </Link>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <IconButton sx={{ color: 'white' }}>
                            <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'white' }}>
                            <ShoppingCartIcon />
                        </IconButton>

                        <IconButton sx={{ color: 'white' }}>
                            <PersonIcon />
                        </IconButton>

                    </Box>

                </Toolbar>
            </AppBar>
        </Box>

    )
}
