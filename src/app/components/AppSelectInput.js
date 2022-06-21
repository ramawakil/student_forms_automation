import React from 'react';
import {Box, MenuItem} from "@mui/material";
import AppTextInput from "./AppTextInput";
import AppText from "./AppText";

function AppSelectInput({ choices, label, width = '100%', value, setValue, ...otherProps }) {
    return (
        <>
            <Box sx={{

            }}>
                <AppText sx={{ ml: 1 }} color='icon.main'>{label}</AppText>
                <AppTextInput
                    select
                    label={label}
                    placeholder={label}
                    value={value}
                    {...otherProps}
                    setValue={(val) => setValue(val)}
                >
                    {
                        choices.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))
                    }
                </AppTextInput>

            </Box>

        </>
    );
}

export default AppSelectInput;