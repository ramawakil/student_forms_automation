import React from 'react';
import {useNavigate} from "react-router-dom";
import AppTable from "../../components/commons/AppTable";

const Columns = [
    { field: 'request_type', headerName: 'Request category', width: 120 },
    { field: 'student_reg', headerName: 'Student Reg No.', width: 130 },
    { field: 'request_reason', headerName: 'Reason'  },
    { field: 'request_status', headerName: 'Status' },
    { field: 'semester_of_study', headerName: 'Semester' },
    { field: 'year_of_retake', headerName: 'Year' }

]

const Rows = [
    {
        id: 1,
        request_type: 'Retake',
        student_reg: "2017-04-07275",
        request_reason: 'Financial',
        request_status: 'Pending',
        semester_of_study: '1',
        year_of_retake: '2020',
    }
]

function TeacherRequestTableComponent({ data }) {
    const navigate = useNavigate();

    const navigateToDetails = (params) => {
        navigate(`/staff-requests/${params.row.id}`, {state: {data: params.row}});
    }

    return (
       <>
            <AppTable data={Rows} columns={Columns} onClickEvent={navigateToDetails} />
       </>
    );
}

export default TeacherRequestTableComponent;