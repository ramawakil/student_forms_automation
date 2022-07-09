import React, { useContext } from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Box, Divider, Stack, Switch} from "@mui/material";
import AppIconButton from "../../../components/AppIconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AppText from "../../../components/AppText";
import studentsApi from "../../../api/student";
import {toast} from "react-toastify";
import LoadingContext from "../../../context/loadingContext";
import PrintIcon from '@mui/icons-material/Print';


function RetakeDetailsComponent({ openDialog }) {
    const params = useLocation();
    const record = params.state.data;
    const { setLoading } = useContext(LoadingContext);
    const navigate  = useNavigate();

    const handleEditForm = () => {
        openDialog()
    }


    const handleDeleteRequest = async () => {
        setLoading(true);
        try{
            await studentsApi.deleteStudentRequest(record.id);
            setLoading(false);
            navigate('/student-requests')
        }
        catch (e) {
            setLoading(false);
            toast.error(e)
        }
    }

    const handleApprovedText = (approve) => {
        if (approve) {
            return 'Approved';
        }
        return 'Not Approved';
    }


    const handlePrint = () => {
        window.print();
    }


    return (
        <>
            <Box sx={{


            }}>
                <AppIconButton label='Print' icon={<PrintIcon />} onPress={handlePrint} />
                <Box sx={{
                    display: 'flex',
                }}>
                    <Box sx={{ flexGrow: 1 }}>{record?.request_date}</Box>
                    { (record?.staff_signed_count === 0 ) && (<>
                        <AppIconButton label='Edit Record' icon={<EditIcon color='secondary'/>} onPress={handleEditForm}/>
                        <AppIconButton label='Delete Record' icon={<DeleteForeverIcon color='warning' />} onPress={handleDeleteRequest} />
                    </>)}
                </Box>

                <AppText>Eligibility of request: {record?.request_status}</AppText>
                <AppText>{record?.reason} Reason for Retake a Course</AppText>
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

                <Box sx={{
                    marginY: 2,
                    display: 'flex'
                }}>
                    <AppText>Head of Department signature</AppText>
                    <Switch checked={record?.hod_signed_approve} disabled={true} />
                </Box>

                <Box sx={{
                    marginY: 2,
                    display: 'flex'
                }}>
                    <AppText>Registrar signature</AppText>
                    <Switch checked={record?.registrar_signed_approve} disabled={true} />
                </Box>

                <Divider sx={{ marginY: 2 }} color='accent' />

                {
                    record?.signatures ? (
                        record?.signatures.map((signature) =>
                            <>
                                <Stack direction='row' spacing={3}>
                                    <AppText>Badge ID: <Box component='span' color='icon.main' >{signature.staff}</Box></AppText>
                                    <AppText>Comments: <Box component='span' color='icon.main' >{signature.comments}</Box></AppText>
                                    <AppText>{handleApprovedText(signature.approved)}</AppText>
                                    <AppText>{signature.signature_date}</AppText>
                                </Stack>
                            </>
                        )
                    ) : (
                        <AppText variant='h6' color='accent.main'>No Feedback yet</AppText>
                    )

                }



            </Box>
        </>
    );
}

export default RetakeDetailsComponent;