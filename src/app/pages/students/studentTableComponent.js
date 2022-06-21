import React from 'react';
import AppTable from "../../components/commons/AppTable";
import {IconButton, Stack, Tooltip} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useNavigate} from "react-router-dom";

const Headers = [
    'Category', 'Reason', 'Status', 'Semester', 'Year'
]

const Columns = [
    { field: 'request_type', headerName: 'Category', width: 70 },
    { field: 'request_reason', headerName: 'Reason', width: 70  },
    { field: 'request_status', headerName: 'Status', width: 70 },


    'request_type', 'request_reason', 'request_status', 'semester_of_study', 'year_of_retake'
]

const StudentData = [
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

    const navigateToDetails = (row) => {
        navigate(`/student-requests/${row.id}`, {state: {row}});
    }

    return (
        <>
            {/*<AppTable tableHeaders={Headers} columns={Columns} handleClick={navigateToDetails} tableData={StudentData}/>*/}
        </>
    );
}

export default StudentTableComponent;