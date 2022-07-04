import React from 'react';
import AppTable from "../../components/commons/AppTable";
import {IconButton, Stack, Tooltip} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useNavigate} from "react-router-dom";



const Columns = [
    { field: 'request_type', headerName: 'Request category', flex: 1 },
    { field: 'reason', headerName: 'Reason', flex: 1 },
    { field: 'semester_of_study', headerName: 'Semester', flex: 1 },
    { field: 'request_date', headerName: 'Date', flex: 1 },
    { field: 'request_status', headerName: 'Status', flex: 1 },
    { field: 'staff_signed_count', headerName: 'Staff Signed', flex: 1 },

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
            <AppTable data={data} columns={Columns} onClickEvent={navigateToDetails} />
        </>
    );
}

export default StudentTableComponent;