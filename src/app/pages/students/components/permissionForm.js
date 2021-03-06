import React, {useContext} from 'react';
import * as Yup from "yup";
import AppForm from "../../../components/forms/AppForm";
import AppFormSelectField from "../../../components/forms/AppFormSelectField";
import {Box, DialogActions, DialogContentText, Stack} from "@mui/material";
import AppFormField from "../../../components/forms/AppFormField";
import AppButton from "../../../components/AppButton";
import AppSubmitButton from "../../../components/forms/AppSubmitButton";
import LoadingContext from "../../../context/loadingContext";
import {useNavigate} from "react-router-dom";
import studentsApi from "../../../api/student";

const ValidationSchema = Yup.object().shape({
    reason: Yup.string().required('Reason required'),
    request_description: Yup.string().required('Request description required'),
    semester_of_study: Yup.string().required('Semester required'),
});


function PermissionForm({ handleClose, record = null }) {
    const { setLoading } = useContext(LoadingContext);
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        setLoading(true);
        try{
            const res = await studentsApi.createStudentRequest(values);
            console.log(res);
            setLoading(false);
            handleClose();
            navigate('/student-requests');
        }
        catch(err){
            console.log(err);
        }
    }

    const handleSubmitEdit = async (values) => {
        setLoading(true);
        try{
            const res = await studentsApi.updateStudentRequest(record.id, values);
            console.log(res);
            setLoading(false);
            handleClose();
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <DialogContentText>
                Fill the form to add a new Permission Request
            </DialogContentText>

            <AppForm
                initialValues={{
                    request_type: 'Permission',
                    reason: `${ record ? record?.reason : ""}`,
                    request_description: `${record ? record?.request_description : ""}`,
                    semester_of_study: `${record ? record?.semester_of_study : ""}`,
                }}
                onSubmit={!record ? handleSubmit : handleSubmitEdit}
                validationSchema={ValidationSchema}
            >

                <AppFormSelectField
                    name="reason"
                    label='Reason for Permission'
                    choices={[
                        {value: 'Financial', label: 'Financial'},
                        {value: 'Social', label: 'Social'},
                        {value: 'Health', label: 'Health'},
                        {value: 'Academic', label: 'Academic'},
                        {value: 'Other', label: 'Other'},
                    ]}
                />

                <Box sx={{ paddingX: 2, mt: 2 }}>
                    <AppFormField
                        name="request_description"
                        label='Request Description'
                        placeholder="Request description"
                        variant="outlined"
                        multiline
                        rows={5}
                    />

                    <AppFormField
                        name="semester_of_study"
                        label='Semester of Study'
                        placeholder="Semester of study"
                        variant="standard"
                        type="number"
                    />

                </Box>

                <DialogActions>
                    <Stack spacing={4} direction='row'>
                        <AppButton title='Cancel' color='warning' onClick={handleClose}/>
                        <AppSubmitButton title='Submit' variant='text'/>
                    </Stack>

                </DialogActions>


            </AppForm>
        </>
    );
}

export default PermissionForm;