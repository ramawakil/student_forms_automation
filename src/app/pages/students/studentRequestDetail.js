import React, {useContext, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import PermissionDetailsComponent from "./components/permissionDetailsComponent";
import RetakeDetailsComponent from "./components/retakeDetailsComponent";
import CarryOverDetailsComponent from "./components/carryOverDetailsComponent";
import PostponedDetailsComponent from "./components/postponedDetailsComponent";
import {Alert, Box, Dialog, DialogContent, DialogTitle} from "@mui/material";
import AppSelectInput from "../../components/AppSelectInput";
import CarryOverForm from "./components/carryOverForm";
import RetakesForm from "./components/retakesForm";
import PermissionForm from "./components/permissionForm";
import PostponedForm from "./components/postponedForm";
import LoadingContext from "../../context/loadingContext";
import studentsApi from "../../api/student";
import {toast} from "react-toastify";

function StudentRequestDetail(props) {
    const params = useLocation();
    const recordObj = params.state.data;
    // retakes = 0, carry = 1, permission = 2, postponed = 3
    const [record, setRecord] = React.useState(null);
    const [request, setRequest] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const { setLoading } = useContext(LoadingContext);
    const navigate  = useNavigate();


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


    const handleDeleteRequest = async () => {
        setLoading(true);
        try{
            await studentsApi.deleteStudentRequest(record.id);
            setLoading(false);
            navigate('/student-requests')
        }
        catch (e) {
            setLoading(false);
            toast.error(e)
        }
    }

    return (
        <>
            { (request === 'Retake') && (<RetakeDetailsComponent openDialog={handleOpen} />) }
            { (request === 'Carry-Over') && (<CarryOverDetailsComponent openDialog={handleOpen} />) }
            { (request === 'Postponed') && (<PostponedDetailsComponent openDialog={handleOpen} />) }
            { (request === 'Permission') && (<PermissionDetailsComponent openDialog={handleOpen} />) }

            <Dialog open={open} onClose={handleClose} maxWidth='md' sx={{width: '100%'}} fullWidth>
                <DialogTitle>Update the request</DialogTitle>
                <DialogContent>
                    {/*   add a condition to display form for carry-over, retakes, permission, postponed  */}
                    <Box sx={{p: 2}}>
                        {request === 'Carry-Over' && <CarryOverForm handleClose={handleClose} record={recordObj} />}
                        {request === 'Retake' && <RetakesForm handleClose={handleClose} record={recordObj}  />}
                        {request === 'Permission' && <PermissionForm handleClose={handleClose} record={recordObj} />}
                        {request === 'Postponed' && <PostponedForm handleClose={handleClose} record={recordObj} />}
                    </Box>

                </DialogContent>
            </Dialog>

            {/*{ (request === 'Retake') && <RetakesForm /> }*/}
            {/*{ (request === 'Carry-over') && <CarryOverForm /> }*/}
            {/*{ (request === 'Postponed') && <PostponedForm />  }*/}
            {/*{ (request === 'Permission') && <PermissionForm />  }*/}

        </>
    );
}

export default StudentRequestDetail;