import React from 'react';
import AppDashboardLayout from "../../components/layout/AppDashboardLayout";
import HomeIcon from "@mui/icons-material/Home";
import {Route, Routes} from "react-router-dom";
import TeacherRequests from "./teacherRequests";
import {Box} from "@mui/material";
import TeacherRequestDetails from "./teacherRequestDetails";
import AddStudent from "./addStudent";
import HowToRegIcon from '@mui/icons-material/HowToReg';


const teacherNavList = [
    {
        id: 0,
        name: 'Home',
        link: '/staff-requests',
        icon: <HomeIcon/>
    },
    {
        id: 1,
        name: 'Add Student',
        link: '/staff-requests/registrar',
        icon: <HowToRegIcon/>
    }
]

function TeacherHome(props) {
    return (
        <>
            <AppDashboardLayout navList={teacherNavList} openSideBar={true}>
                <Box sx={{
                    width: '100%'
                }}>
                    <Routes>
                        <Route path='' element={<TeacherRequests/>}/>
                        <Route path=':id' element={<TeacherRequestDetails/>}/>
                        <Route path='registrar' element={<AddStudent/>}/>
                    </Routes>
                </Box>
            </AppDashboardLayout>
        </>
    );
}

export default TeacherHome;