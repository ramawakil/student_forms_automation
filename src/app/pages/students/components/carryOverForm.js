import React from 'react';
import AppForm from "../../../components/forms/AppForm";
import * as Yup from 'yup';
import AppFormField from "../../../components/forms/AppFormField";
import AppFormSelectField from "../../../components/forms/AppFormSelectField";
import {Box, DialogActions, DialogContentText, Stack} from "@mui/material";
import AppButton from "../../../components/AppButton";
import AppSubmitButton from "../../../components/forms/AppSubmitButton";

const ValidationSchema = Yup.object().shape({
    reason: Yup.string().required('Reason required'),
    request_description: Yup.string().required('Request description required'),
    course: Yup.string().required('Course required'),
    module_name: Yup.string().required('Module name required'),
    module_code: Yup.string().required('Module code required'),
    assessment_marks: Yup.string().required('Assessment marks required'),
    semester_of_study: Yup.string().required('Semester required'),
});

function CarryOverForm({ handleClose }) {

    const handleSubmit = async (values) => {
        console.log(values);
    }

    return (
        <>
            <DialogContentText>
                Fill in the form below to add a new Carry Over Request
            </DialogContentText>
            <AppForm
                initialValues={{
                    reason: '',
                    request_description: '',
                    course: '',
                    module_name: '',
                    module_code: '',
                    assessment_marks: '',
                    semester_of_study: '',
                }}
                onSubmit={handleSubmit}
                validationSchema={ValidationSchema}
            >

                <AppFormSelectField
                    name="reason"
                    label='Reason for Carry Over'
                    choices={[
                        { value: 'Financial', label: 'Financial' },
                        { value: 'Social', label: 'Social' },
                        { value: 'Health', label: 'Health' },
                        { value: 'Academic', label: 'Academic' },
                        { value: 'Other', label: 'Other' },
                    ]}
                />

                <Box sx={{ paddingX: 2, mt: 2 }}>
                    <AppFormField
                        name="request_description"
                        label='Request Description'
                        multiline
                        rows={5}
                        placeholder="Request description"
                        variant="outlined"
                    />

                    <AppFormField
                        name="course"
                        label='Course'
                        placeholder="Course"
                        variant="standard"
                    />

                    <AppFormField
                        name="module_name"
                        label='Module Name'
                        placeholder="Module name"
                        variant="standard"
                    />

                    <AppFormField
                        name="module_code"
                        label='Module Code'
                        placeholder="Module code"
                        variant="standard"
                    />

                    <AppFormField
                        name="assessment_marks"
                        label='Assessment Marks'
                        placeholder="Assessment marks"
                        variant="standard"
                        type="number"
                    />

                    <AppFormField
                        name="semester_of_study"
                        label='Semester of Study'
                        placeholder="Semester of study"
                        variant="standard"
                        type="number"
                        min="1"
                        max="2"
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

export default CarryOverForm;