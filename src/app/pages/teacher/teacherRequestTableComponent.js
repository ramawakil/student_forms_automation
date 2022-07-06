import React from 'react';
import {useNavigate} from "react-router-dom";
import AppTable from "../../components/commons/AppTable";

const Columns = [
    { field: 'request_type', headerName: 'Request category', flex: 1 },
    { field: 'reason', headerName: 'Reason', flex: 1 },
    { field: 'semester_of_study', headerName: 'Semester', flex: 1 },
    { field: 'request_date', headerName: 'Date', flex: 1 },
    { field: 'request_status', headerName: 'Status', flex: 1 },

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

function TeacherRequestTableComponent({data}) {
    const navigate = useNavigate();
    const [students] = React.useState(Rows);

    const navigateToDetails = (params) => {
        navigate(`/staff-requests/${params.row.id}`, {state: {data: params.row}});
    }

    return (
        <>
            <AppTable data={data} columns={Columns} onClickEvent={navigateToDetails}/>
        </>
    );
}

export default TeacherRequestTableComponent;