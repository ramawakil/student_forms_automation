import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import TeacherRetakeDetailsComponent from "./components/teacherRetakeDetailsComponent";
import TeacherCarryOverDetailsComponent from "./components/teacherCarryOverDetailsComponent";
import TeacherPostponedDetailsComponent from "./components/teacherPostponedDetailsComponent";
import TeacherPermissionDetailsComponent from "./components/teacherPermissionDetailsComponent";

function TeacherRequestDetails(props) {
    const params = useLocation();
    const recordObj = params.state.data;
    // retakes = 0, carry = 1, permission = 2, postponed = 3
    const [record, setRecord] = React.useState(null);
    const [request, setRequest] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }


    useEffect(() => {
        setRequest(recordObj?.request_type)
        setRecord(recordObj)
    }, [params])

    return (
        <>
            {(request === 'Retake') && (<TeacherRetakeDetailsComponent/>)}
            {(request === 'Carry-over') && (<TeacherCarryOverDetailsComponent/>)}
            {(request === 'Postponed') && (<TeacherPostponedDetailsComponent/>)}
            {(request === 'Permission') && (<TeacherPermissionDetailsComponent/>)}

        </>
    );
}

export default TeacherRequestDetails;