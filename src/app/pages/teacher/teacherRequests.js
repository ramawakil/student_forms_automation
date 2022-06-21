import React from 'react';
import {Box} from "@mui/material";
import StudentTableComponent from "../students/studentTableComponent";
import TeacherRequestTableComponent from "./teacherRequestTableComponent";

function TeacherRequests(props) {
    return (
        <>
            <Box sx={{mt: 2}}>
                <TeacherRequestTableComponent />
            </Box>
        </>
    );
}

export default TeacherRequests;