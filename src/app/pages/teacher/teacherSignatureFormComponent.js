import React from 'react';
import AppForm from "../../components/forms/AppForm";
import * as Yup from 'yup';
import AppFormField from "../../components/forms/AppFormField";
import AppFormSwitch from "../../components/forms/AppFormSwitch";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import {Box} from "@mui/material";
import AppButton from "../../components/AppButton";

const ValidationSchema = Yup.object().shape({
    comment: Yup.string().required('Comment is required'),
    approved: Yup.boolean().required('Approved is required'),
})

function TeacherSignatureFormComponent({ record, hide }) {

    const handleSubmit = async (values) => {
        console.log(values);

    }

    return (
        <>
            <AppForm
                initialValues={{ comment: '', approved: false }}
                onSubmit={handleSubmit}
                validationSchema={ValidationSchema}
            >
                <AppFormField
                    name="comment"
                    label='Comment'
                    variant='outlined'
                    multiline
                    rows={4}
                />

                <AppFormSwitch
                    name="approved"
                    label="Approved"
                />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <AppButton title='Cancel' variant='outlined' onPress={hide} color='warning'/>
                    <AppSubmitButton variant='contained' color='success' fullWidth={false} title='Confirm Signature' />
                </Box>




            </AppForm>
        </>
    );
}

export default TeacherSignatureFormComponent;