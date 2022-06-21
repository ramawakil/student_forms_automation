import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import AppIconButton from "../../../components/AppIconButton";
import AppText from "../../../components/AppText";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import TeacherSignatureFormComponent from "../teacherSignatureFormComponent";

function TeacherCarryOverDetailsComponent({ record }) {
    const [signFormVisible, setSignFormVisible] = useState(false);

    const handleShowForm = () => {
        setSignFormVisible(true)
    }


    const handleEditForm = () => {

    }

    const handleDeleteForm = () => {

    }

    return (
        <>
            <Box sx={{}}>
                <Box sx={{
                    display: 'flex',
                }}>
                    <Box sx={{flexGrow: 1}}>{record?.request_date}</Box>
                </Box>
                <AppText>{record?.student.name} of {record?.student.user.username}</AppText>

                <AppText>Eligibility of request: {record.request_status}</AppText>
                <AppText>{record?.request_reason} Reason for Carry Over</AppText>
                <AppText>{record?.description}</AppText>
                <AppText>Semester {record?.semester_of_study}</AppText>
                <AppText>Course: {record?.course}</AppText>
                <Box sx={{
                    marginY: 2,
                    display: 'flex'
                }}>
                    <AppText>Module: {record?.module_name}</AppText>
                    <AppText>Code: {record?.module_code}</AppText>
                </Box>

                <Box sx={{ display: 'flex', mt: 4 }}>
                    <Box sx={{ flexGrow: 0.5 }}></Box>
                    <Box sx={{
                        textAlign: 'center'
                    }}>
                        <AppIconButton label='Signature' onPress={handleShowForm} icon={<FingerprintIcon fontSize='large' color='success'/>}/>
                        <AppText color='primary'>Click to Sign</AppText>
                    </Box>

                </Box>

                {
                    signFormVisible && <TeacherSignatureFormComponent record={null} />
                }



            </Box>
        </>
    );
}

export default TeacherCarryOverDetailsComponent;