import React from 'react';
import {Avatar, Box, IconButton, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {styled} from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import AppIconButton from "./AppIconButton";
import {useNavigate} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';


const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


function AppNavBar({open = true, showButton, auth = true, handleLogOut, handleDrawerOpen}) {
    const navigate = useNavigate();


    const handleClickHome = () => {
        navigate('/');
    }

    const handleClickLogin = () => {
        navigate('/login');
    }

    const handleClickProfile = () => {
        navigate('/profile');
    }


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    {showButton && (<IconButton
                        size="large"
                        edge="start"
                        onClick={handleDrawerOpen}
                        color="white"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>)}
                    <IconButton color='white' onClick={handleClickHome}>
                        Company Title
                        <Avatar sx={{ml: 1}} src='/nit.png'/>
                    </IconButton>

                    <Box component="div" sx={{flexGrow: 1}}></Box>
                    {
                        auth ? (
                                <>
                                    <AppIconButton icon={<AccountCircleIcon color='white'/>}
                                                   onPress={handleClickProfile} label='Profile'/>
                                    <AppIconButton icon={<LogoutIcon color='white'/>} onPress={handleLogOut}
                                                   label='Logout'/>
                                </>
                            )
                            :
                            (
                                <>
                                    <AppIconButton icon={<LoginIcon color='white'/>} onPress={handleClickLogin}
                                                   label='Login'/>
                                </>
                            )
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default AppNavBar;