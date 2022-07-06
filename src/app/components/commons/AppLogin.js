import React, {useContext} from 'react';
import {Box, Container, Paper} from "@mui/material";
import AppForm from "../forms/AppForm";
import * as Yup from 'yup';
import AppFormField from "../forms/AppFormField";
import AppSubmitButton from "../forms/AppSubmitButton";
import AppLogo from "../AppLogo";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import AppButton from "../AppButton";
import LoadingContext from "../../context/loadingContext";
import authApi from "../../api/auth";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";


const ValidationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});

function AppLogin({
                      title = 'Add Company Title',
                      subTitle = 'Login to Continue',
                      imageSize = '150px',
                      onSubmitForm,
                      validationSchema = null,
                      initialValues = null,
                        usernameLabel = null,
                        passwordLabel = null
                  }) {
    const {setLoading} = useContext(LoadingContext);
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            const res = await authApi.login(values);
            setLoading(false);
            navigate('/');

        }
        catch (error) {
            setLoading(false);
            console.log(error)
            toast(error.response.data.detail);
        }
    }


    return (
        <Container maxWidth='sm'>
            <Paper elevation={5} sx={{
                mt: 5,
                p: 2
            }}>

                <AppLogo imageUrl='/nit.png' appTitle={title} subtitle={subTitle}
                         imageAlt='Company logo at login page' height={imageSize} width={imageSize}/>

                <AppForm
                    initialValues={initialValues ? initialValues : {username: '', password: ''}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema ? validationSchema : ValidationSchema}
                >

                    <AppFormField
                        name='username'
                        label={usernameLabel ? usernameLabel : 'Username'}
                        backIcon={<PersonIcon color='icon'/>}
                    />

                    <AppFormField
                        name='password'
                        label={passwordLabel ? passwordLabel : 'Password'}
                        backIcon={<LockIcon color='icon'/>}
                        type='password'
                    />

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: 2,

                    }}>

                        <AppButton title='Forgot password?' variant='text' sx={{textTransform: 'none'}}/>
                        {/*<AppButton title='No account? Create now.' variant='text' sx={{textTransform: 'none'}}/>*/}


                    </Box>

                    <AppSubmitButton title='LOGIN' variant='contained' color='success'/>

                </AppForm>


            </Paper>
        </Container>
    );
}

export default AppLogin;