import React from 'react';
import {Route, Routes} from "react-router-dom";
import StudentRequests from "./studentRequests";
import StudentRequestDetail from "./studentRequestDetail";
import AppDashboardLayout from "../../components/layout/AppDashboardLayout";


function StudentHome(props) {
    return (
        <>
            <AppDashboardLayout>
                <Routes>
                    <Route path='' element={<StudentRequests/>}/>
                    <Route path=':id' element={<StudentRequestDetail/>}/>
                </Routes>
            </AppDashboardLayout>

        </>
    );
}

export default StudentHome;