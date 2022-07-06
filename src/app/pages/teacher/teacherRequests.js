import React, {useEffect} from 'react';
import {Box} from "@mui/material";
import StudentTableComponent from "../students/studentTableComponent";
import TeacherRequestTableComponent from "./teacherRequestTableComponent";
import studentsApi from "../../api/student";
import logService from "../../services/logService";

function TeacherRequests(props) {
    const [requests, setRequests] = React.useState([]);

    useEffect(() => {
        getRequests();
    }, [])

    const getRequests = async () => {
        try {
            const res = await studentsApi.getStudentRequests();
            setRequests(res.data);
        }
        catch (error) {
            logService.log(error);
        }
    }

    return (
        <>
            <Box sx={{mt: 2}}>
                <TeacherRequestTableComponent data={requests}  />
            </Box>
        </>
    );
}

export default TeacherRequests;