import React, {useContext, useEffect} from 'react';
import {Box, Dialog, DialogContent, DialogTitle} from "@mui/material";
import AppButton from "../../components/AppButton";
import AddIcon from "@mui/icons-material/Add";
import AppTextInput from "../../components/AppTextInput";
import StudentTableComponent from "./studentTableComponent";
import LoadingContext from "../../context/loadingContext";
import CarryOverForm from "./components/carryOverForm";
import RetakesForm from "./components/retakesForm";
import PermissionForm from "./components/permissionForm";
import PostponedForm from "./components/postponedForm";
import * as Yup from "yup";
import AppSelectInput from "../../components/AppSelectInput";
import studentsApi from "../../api/student";


const ValidationSchema = Yup.object().shape({
    request_type: Yup.string().required('Request type required'),
})


function StudentRequests(props) {
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(null);
    const {setLoading} = useContext(LoadingContext);
    const [studentRequests, setStudentRequest] = React.useState([]);
    const [requestType, setRequestType] = React.useState(0);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFetchStudentRequests = async () => {
        setLoading(true);
        try{
            const res = await studentsApi.getStudentRequests();
           setStudentRequest(res.data);
            setLoading(false);
        }
        catch(err){
            setLoading(false);
        }
    }

    const handleRequestType = (value) => {
        console.log(value);
        setRequestType(value);
    }

    useEffect(() => {
        handleFetchStudentRequests();
    }, [])

    useEffect(() => {
        handleFetchStudentRequests();
    }, [open])


    return (
        <>
            <Box sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',

            }}>
                <Box sx={{
                    flex: 0.9
                }}>
                    <AppTextInput
                        placeholder="Search ..."

                    />
                </Box>
                {/*<AppButton variant='contained' sx={{ width: '60%',  }} title='Add new Farm' />*/}
                <AppButton variant='contained' onClick={handleClickOpen} title='Add new Request' color='info'
                           startIcon={<AddIcon/>}/>
            </Box>

            <Box sx={{mt: 2}}>
                <StudentTableComponent data={studentRequests}/>
            </Box>

            <Dialog open={open} onClose={handleClose} maxWidth='md' sx={{width: '100%'}} fullWidth>
                <DialogTitle>Create new request</DialogTitle>
                <Box sx={{paddingX: 4}}>
                    <AppSelectInput
                        label="Request Type"
                        value={requestType}
                        choices={[
                            {value: 0, label: 'Carry Over'},
                            {value: 1, label: 'Retakes'},
                            {value: 2, label: 'Permission'},
                            {value: 3, label: 'Postponed'},
                            {value: 4, label: 'Appeal'},
                        ]}
                        setValue={(value) => setRequestType(value)}
                    />
                </Box>
                <DialogContent>

                    {/*   add a condition to display form for carry-over, retakes, permission, postponed  */}
                    <Box sx={{p: 2}}>
                        {requestType === 0 && <CarryOverForm handleClose={handleClose}/>}
                        {requestType === 1 && <RetakesForm handleClose={handleClose}/>}
                        {requestType === 2 && <PermissionForm handleClose={handleClose}/>}
                        {requestType === 4 && <PermissionForm handleClose={handleClose}/>}
                        {requestType === 3 && <PostponedForm handleClose={handleClose}/>}
                    </Box>

                </DialogContent>
            </Dialog>
        </>
    );
}

export default StudentRequests;