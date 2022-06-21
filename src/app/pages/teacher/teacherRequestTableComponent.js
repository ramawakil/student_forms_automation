import React from 'react';
import {useNavigate} from "react-router-dom";
import AppTable from "../../components/commons/AppTable";

const Columns = [
    {field: 'username', headerName: 'Reg number', width: 120},
    {field: 'phone', headerName: 'Phone number', width: 130},
    {field: 'first_name', headerName: 'First Name'},
    {field: 'last_name', headerName: 'Last Name'},
    {field: 'genger', headerName: 'Gender'},
    {field: 'degree_duration', headerName: 'Degree Duration'},
    {field: 'programme', headerName: 'Programme'},
    {field: 'department', headerName: 'department'},


]

const Rows = [
    {
        id: 1,
        username: '123456789',
        phone: '0712345678',
        first_name: 'John',
        last_name: 'Doe',
        gender: 'Male',
        degree_duration: '4',
        programme: 'Computer Science',
        department: 'IT and Engineering'
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
            <AppTable data={students} columns={Columns} onClickEvent={navigateToDetails}/>
        </>
    );
}

export default TeacherRequestTableComponent;