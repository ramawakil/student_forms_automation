import React, {useContext} from 'react';
import AppForm from "../../components/forms/AppForm";
import * as Yup from 'yup';
import AppFormField from "../../components/forms/AppFormField";
import AppFormSwitch from "../../components/forms/AppFormSwitch";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import {Box} from "@mui/material";
import AppButton from "../../components/AppButton";
import LoadingContext from "../../context/loadingContext";
import studentsApi from "../../api/student";
import {useNavigate} from "react-router-dom";

const ValidationSchema = Yup.object().shape({
    comment: Yup.string().required('Comment is required'),
    approved: Yup.boolean().required('Approved is required'),
})

function TeacherSignatureFormComponent({ record, hide }) {
    const { setLoading } = useContext(LoadingContext);
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            await studentsApi.addStudentSignature({
                request: record.id,
                comments: values.comment,
                approved: values.approved,
            })
            setLoading(false);
            navigate('/staff-requests');
        }
        catch (error) {
            setLoading(false);
            console.log(error);
        }

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