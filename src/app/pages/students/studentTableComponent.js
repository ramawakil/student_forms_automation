import React from 'react';
import AppTable from "../../components/commons/AppTable";
import {IconButton, Stack, Tooltip} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useNavigate} from "react-router-dom";


const Columns = [
    { field: 'request_type', headerName: 'Request category', width: 160 },
    { field: 'request_reason', headerName: 'Reason'  },
    { field: 'request_status', headerName: 'Status' },
    { field: 'semester_of_study', headerName: 'Semester' },
    { field: 'year_of_retake', headerName: 'Year' }

]

const Rows = [
    {
        id: 1,
        request_type: 'Retake',
        request_reason: 'Financial',
        request_status: 'Pending',
        semester_of_study: '1',
        year_of_retake: '2020',
    }
]

function StudentTableComponent({data}) {
    const navigate = useNavigate();

    const navigateToDetails = (params) => {
        navigate(`/student-requests/${params.row.id}`, {state: {data: params.row}});
    }

    return (
        <>
            <AppTable data={Rows} columns={Columns} onClickEvent={navigateToDetails} />
        </>
    );
}

export default StudentTableComponent;