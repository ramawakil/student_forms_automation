import React from 'react';
import {Route, Routes} from "react-router-dom";
import StudentRequests from "./studentRequests";
import StudentRequestDetail from "./studentRequestDetail";
import AppDashboardLayout from "../../components/layout/AppDashboardLayout";
import HomeIcon from '@mui/icons-material/Home';


const studentNavList = [
    {
        id: 0,
        name: 'Home',
        link: '/student-requests',
        icon: <HomeIcon/>
    }
]

function StudentHome(props) {
    return (
        <>
            <AppDashboardLayout navList={studentNavList} openSideBar={true} >
                <Routes>
                    <Route path='' element={<StudentRequests/>}/>
                    <Route path=':id' element={<StudentRequestDetail/>}/>
                </Routes>
            </AppDashboardLayout>

        </>
    );
}

export default StudentHome;