import React from 'react';
import * as Yup from "yup";
import AppFormSelectField from "../../../components/forms/AppFormSelectField";
import AppFormField from "../../../components/forms/AppFormField";
import {Box, DialogActions, DialogContentText, Stack} from "@mui/material";
import AppButton from "../../../components/AppButton";
import AppSubmitButton from "../../../components/forms/AppSubmitButton";
import AppForm from "../../../components/forms/AppForm";

const ValidationSchema = Yup.object().shape({
    reason: Yup.string().required('Reason required'),
    request_description: Yup.string().required('Request description required'),
    course: Yup.string().required('Course required'),
    module_name: Yup.string().required('Module name required'),
    module_code: Yup.string().required('Module code required'),
    semester_of_study: Yup.string().required('Semester required'),
    assessment_marks: Yup.string().required('Assessment marks required'),
    year_of_retake: Yup.string().required('Year required'),
});

function RetakesForm({handleClose}) {

    const handleSubmit = async (values) => {
        console.log(values);
    }

    return (
        <>
            <DialogContentText>
                Fill in the form below to add a new Retake Request
            </DialogContentText>
            <AppForm
                initialValues={{
                    reason: '',
                    request_description: '',
                    course: '',
                    module_name: '',
                    module_code: '',
                    semester_of_study: '',
                    assessment_marks: '',
                    year_of_retake: '',
                }}
                onSubmit={handleSubmit}
                validationSchema={ValidationSchema}
            >

                <AppFormSelectField
                    name="reason"
                    label='Reason for Retake'
                    choices={[
                        {value: 'Financial', label: 'Financial'},
                        {value: 'Social', label: 'Social'},
                        {value: 'Health', label: 'Health'},
                        {value: 'Academic', label: 'Academic'},
                        {value: 'Other', label: 'Other'},
                    ]}
                />

                <Box sx={{paddingX: 2, mt: 2}}>
                    <AppFormField
                        name="request_description"
                        label='Request Description'
                        placeholder="Request description"
                        variant="outlined"
                        multiline
                        rows={5}

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
                        name="semester_of_study"
                        label='Semester of Study'
                        placeholder="Semester of study"
                        variant="standard"
                        type="number"
                        min="1"
                        max="2"
                    />

                    <AppFormField
                        name="assessment_marks"
                        label='Assessment Marks'
                        placeholder="Assessment marks"
                        variant="standard"
                        type="number"
                        min="1"
                        max="100"
                    />

                    <AppFormField
                        name="year_of_retake"
                        label='Year of Retake'
                        placeholder="Year of retake"
                        variant="standard"
                        type="number"
                        min={new Date().getFullYear()}
                        max={new Date().getFullYear() + 1}
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

export default RetakesForm;