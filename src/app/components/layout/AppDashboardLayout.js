import React, {useContext} from 'react';
import {Box, CssBaseline, Toolbar, Typography} from "@mui/material";
import userContext from "../../context/userContext";
import {styled} from "@mui/material/styles";
import AppNavBar from "../AppNavBar";
import AppDrawer from "../AppDrawer";
import UserContext from "../../context/userContext";

const drawerWidth = 200;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),

        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function AppDashboardLayout({ children }) {
    const {user} = useContext(UserContext);
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppNavBar open={open} showButton={!open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen}/>
               <AppDrawer drawerWidth={drawerWidth} open={open} handleDrawerClose={handleDrawerClose}/>
                <Toolbar/>
                <Main open={open}>
                    <Toolbar />
                    {children}
                </Main>
            </Box>
        </>
    );
}

export default AppDashboardLayout;