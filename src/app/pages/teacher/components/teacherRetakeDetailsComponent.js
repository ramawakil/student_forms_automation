import React, {useState} from 'react';
import {Box} from "@mui/material";
import AppIconButton from "../../../components/AppIconButton";
import AppText from "../../../components/AppText";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import TeacherSignatureFormComponent from "../teacherSignatureFormComponent";


function TeacherRetakeDetailsComponent({record}) {
    const [signFormVisible, setSignFormVisible] = useState(false);

    const handleShowForm = () => {
        setSignFormVisible(true)
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


                <AppText>Eligibility of request: {record?.request_status}</AppText>
                <AppText>{record?.request_reason} Reason for Retake a Course</AppText>
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
                <AppText>Assessment Marks: {record?.assessment_mark}</AppText>
                <AppText>Year of Retake: {record?.year_of_retake}</AppText>


                { !signFormVisible && <Box sx={{display: 'flex', mt: 4}}>
                    <Box sx={{flexGrow: 0.5}}></Box>
                    <Box sx={{
                        textAlign: 'center'
                    }}>
                        <AppIconButton label='Signature' onPress={handleShowForm}
                                       icon={<FingerprintIcon fontSize='large' color='success'/>}/>
                        <AppText color='primary'>Click to Sign</AppText>
                    </Box>

                </Box>}

                {
                    signFormVisible && <TeacherSignatureFormComponent record={null} />
                }


            </Box>
        </>
    );

}

export default TeacherRetakeDetailsComponent;