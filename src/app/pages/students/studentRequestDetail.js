import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import PermissionDetailsComponent from "./components/permissionDetailsComponent";
import RetakeDetailsComponent from "./components/retakeDetailsComponent";
import CarryOverDetailsComponent from "./components/carryOverDetailsComponent";
import PostponedDetailsComponent from "./components/postponedDetailsComponent";
import {Box, Dialog, DialogContent, DialogTitle} from "@mui/material";
import AppSelectInput from "../../components/AppSelectInput";
import CarryOverForm from "./components/carryOverForm";
import RetakesForm from "./components/retakesForm";
import PermissionForm from "./components/permissionForm";
import PostponedForm from "./components/postponedForm";

function StudentRequestDetail(props) {
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
            { (request === 'Retake') && (<RetakeDetailsComponent openDialog={handleOpen} />) }
            { (request === 'Carry-over') && (<CarryOverDetailsComponent openDialog={handleOpen} />) }
            { (request === 'Postponed') && (<PostponedDetailsComponent openDialog={handleOpen} />) }
            { (request === 'Permission') && (<PermissionDetailsComponent openDialog={handleOpen} />) }

            <Dialog open={open} onClose={handleClose} maxWidth='md' sx={{width: '100%'}} fullWidth>
                <DialogTitle>Update the request</DialogTitle>
                <DialogContent>
                    {/*   add a condition to display form for carry-over, retakes, permission, postponed  */}
                    <Box sx={{p: 2}}>
                        {request === 'Carry-over' && <CarryOverForm handleClose={handleClose} record={record} />}
                        {request === 'Retake' && <RetakesForm handleClose={handleClose} record={record}  />}
                        {request === 'Permission' && <PermissionForm handleClose={handleClose} record={record} />}
                        {request === 'Postponed' && <PostponedForm handleClose={handleClose} record={record} />}
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