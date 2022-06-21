import React, {useState, useContext} from 'react';
import LoadingContext from "../../context/loadingContext";
import {Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack} from "@mui/material";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";
import AddIcon from "@mui/icons-material/Add";
import StudentTableComponent from "../students/studentTableComponent";
import AppForm from "../../components/forms/AppForm";
import AppFormSelectField from "../../components/forms/AppFormSelectField";
import AppFormField from "../../components/forms/AppFormField";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import * as Yup from "yup";


const ValidationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    phone: Yup.string().required('Phone is required'),
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    gender: Yup.string(),
    degree_duration: Yup.string().required('Degree duration is required'),
    start_year: Yup.string().required('Start year is required'),
    programme: Yup.string().required('Programme is required'),
    department: Yup.string().required('Department is required'),
});

function AddStudent(props) {
    const [open, setOpen] = React.useState(false);
    const [student, students] = useState([])
    const [error, setError] = React.useState(null);
    const {setLoading} = useContext(LoadingContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {

    }

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
                <StudentTableComponent data={students}/>
            </Box>

            <Dialog open={open} onClose={handleClose} maxWidth='md' sx={{width: '100%'}} fullWidth>
                <DialogTitle>Create new request</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill in the form below to add a new Student.
                    </DialogContentText>
                    <AppForm
                        initialValues={{
                            username: '',
                            phone: '',
                            first_name: '',
                            last_name: '',
                            gender: '',
                            degree_duration: '',
                            start_year: '',
                            programme: '',
                            department: ''
                        }}
                        onSubmit={handleSubmit}
                        validationSchema={ValidationSchema}
                    >

                        <AppFormField name='username' label='Reg number'/>
                        <AppFormField name='phone' label='Phone'/>
                        <AppFormField name='first_name' label='First Name'/>
                        <AppFormField name='last_name' label='Last Name'/>
                        <AppFormSelectField name='gender' label='Gender' choices={[
                            {label: 'Male', value: 'Male'},
                            {label: 'Female', value: 'Female'}
                        ]}
                        />
                        <AppFormField name='degree_duration' label='Degree duration'/>
                        <AppFormField name='start_year' label='Start year'/>
                        <AppFormSelectField name='programme' label='Programme' choices={[
                            {
                                label: 'Bachelor of Science in Computer Science',
                                value: 'Bachelor of Science in Computer Science'
                            },
                            {
                                label: 'Bachelor of Science in Information Technology',
                                value: 'Bachelor of Science in Information Technology'
                            },
                            {
                                label: 'Bachelor of Science in Information Systems',
                                value: 'Bachelor of Science in Information Systems'
                            },
                        ]}
                        />
                        <AppFormSelectField name='department'   label='Department' choices={[
                            {
                                label: 'Computer Science',
                                value: 'Computer Science'
                            },
                            {
                                label: 'Information Technology',
                                value: 'Information Technology'
                            }
                            ]}
                        />

                        <DialogActions>
                            <Stack spacing={4} direction='row'>
                                <AppButton title='Cancel' color='warning' onClick={handleClose}/>
                                <AppSubmitButton title='Submit' variant='text'/>
                            </Stack>

                        </DialogActions>


                    </AppForm>

                </DialogContent>
            </Dialog>
        </>
    );
}

export default AddStudent;