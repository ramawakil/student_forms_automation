import React from 'react';
import * as Yup from "yup";
import AppForm from "../../../components/forms/AppForm";
import AppFormSelectField from "../../../components/forms/AppFormSelectField";
import {Box, DialogActions, DialogContentText, Stack} from "@mui/material";
import AppFormField from "../../../components/forms/AppFormField";
import AppButton from "../../../components/AppButton";
import AppSubmitButton from "../../../components/forms/AppSubmitButton";

const ValidationSchema = Yup.object().shape({
    reason: Yup.string().required('Reason required'),
    request_description: Yup.string().required('Request description required'),
    semester_of_study: Yup.string().required('Semester required'),
});


function PermissionForm({ handleClose, record = null }) {

    const handleSubmit = async (values) => {
        console.log(values);
    }

    const handleSubmitEdit = async (values) => {

    }

    return (
        <>
            <DialogContentText>
                Fill the form to add a new Permission Request
            </DialogContentText>

            <AppForm
                initialValues={{
                    reason: `${ record ? record?.request_reason : ""}`,
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