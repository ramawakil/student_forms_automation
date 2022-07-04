import React from 'react';
import AppLogin from "../components/commons/AppLogin";
import * as Yup from "yup";
import appConfig from '../config/appConfig.json';
import {Toolbar} from "@mui/material";
import AppNavBar from "../components/AppNavBar";


const ValidationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});


function LoginPage(props) {
    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <>
            <AppNavBar open={false} auth={false} showButton={false}  />
            <Toolbar />
            <AppLogin usernameLabel='Reg number or Email' initialValues={{username: '', password: ''}}
                      validationSchema={ValidationSchema} title={appConfig.appName} subTitle='Fill the form to proceed'
                      onSubmitForm={handleSubmit}/>
        </>
    );
}

export default LoginPage;