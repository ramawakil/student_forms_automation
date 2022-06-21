import React, {useState} from 'react';
import {Box} from "@mui/material";
import AppIconButton from "../../../components/AppIconButton";
import AppText from "../../../components/AppText";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import TeacherSignatureFormComponent from "../teacherSignatureFormComponent";


function TeacherPostponedDetailsComponent({record}) {
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

                <AppText>{record?.student?.user} of {record?.student?.user?.username}</AppText>


                <AppText>Eligibility of request: {record.request_status}</AppText>
                <AppText>{record?.request_reason} Reason for Postpone a Course</AppText>
                <AppText>{record?.description}</AppText>
                <AppText>Semester {record?.semester_of_study}</AppText>

                <AppText>{record?.starting_date}</AppText>
                <AppText>{record?.ending_date}</AppText>


                {!signFormVisible && <Box sx={{display: 'flex', mt: 4}}>
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
                    signFormVisible && <TeacherSignatureFormComponent record={null}/>
                }

            </Box>
        </>
    );
}

export default TeacherPostponedDetailsComponent;