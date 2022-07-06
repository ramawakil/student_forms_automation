import React, {useState} from 'react';
import {Box, Divider} from "@mui/material";
import AppIconButton from "../../../components/AppIconButton";
import AppText from "../../../components/AppText";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import TeacherSignatureFormComponent from "../teacherSignatureFormComponent";


function TeacherRetakeDetailsComponent({record}) {
    const [signFormVisible, setSignFormVisible] = useState(false);

    const handleShowForm = () => {
        setSignFormVisible(true)
    }

    const handleHideForm = () => {
        setSignFormVisible(false)
    }

    return (
        <>
            <Box sx={{}}>
                <Box sx={{
                    display: 'flex',
                }}>
                    <Box sx={{flexGrow: 1}}>{record?.request_type} Request Made at {record?.request_date}
                    </Box>                </Box>

                <AppText>{record?.student?.user.first_name} of Registration number. {record?.student?.user?.username}, Taking {record?.student?.programme}</AppText>
                <Divider sx={{ marginY: 2 }} color='accent' />


                <AppText>Eligibility of request: {record.request_status}</AppText>
                <AppText>Had {record?.reason} Reason for Postpone a Course</AppText>
                <Divider sx={{ marginY: 2 }} color='accent' />
                <AppText>{record?.request_description}</AppText>
                <Divider sx={{ marginY: 2 }} color='accent' />
                <AppText>Semester {record?.semester_of_study}</AppText>
                <AppText>Course: {record?.course}</AppText>
                <Divider sx={{ marginY: 2 }} color='accent' />
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
                    signFormVisible && <TeacherSignatureFormComponent hide={handleHideForm} record={record} />
                }


            </Box>
        </>
    );

}

export default TeacherRetakeDetailsComponent;