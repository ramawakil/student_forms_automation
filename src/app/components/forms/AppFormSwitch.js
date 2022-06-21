import React from 'react';
import AppSwitch from "../AppSwitch";
import {useFormikContext} from "formik";
import AppErrorMessage from "./AppErrorMessage";
import {Box} from "@mui/material";
import AppText from "../AppText";

function AppFormSwitch({name, label, ...otherProps}) {
    const {setFieldTouched, values, setFieldValue, errors, touched} = useFormikContext();

    return (
        <>
            <Box sx={{
                overflow: 'hidden',
                marginY: 2,
            }}>
            <AppText>{label}</AppText>
            <AppSwitch
                value={values[name]}
                {...otherProps}
                error={errors[name] && touched[name]}
                onBlur={() => setFieldTouched(name)}
                setValue={(val) => setFieldValue(name, val)}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} sx={{mt: 1}}/>
            </Box>
        </>
    );
}

export default AppFormSwitch;