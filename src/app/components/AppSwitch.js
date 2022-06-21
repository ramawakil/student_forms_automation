import React from 'react';
import {Box, Switch} from "@mui/material";

function AppSwitch({ value, setValue, ...otherProps }) {
    return (
        <>
            <Box sx={{

            }}>
                <Switch
                    checked={value}
                    onChange={(e) => setValue(e.target.checked)}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </Box>
        </>
    );
}

export default AppSwitch;