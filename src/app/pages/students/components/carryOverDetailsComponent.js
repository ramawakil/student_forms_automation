import React, { useContext } from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Box, Divider, Switch} from "@mui/material";
import AppIconButton from "../../../components/AppIconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AppText from "../../../components/AppText";
import studentsApi from "../../../api/student";
import {toast} from "react-toastify";
import LoadingContext from "../../../context/loadingContext";

function CarryOverDetailsComponent({ openDialog }) {
    const params = useLocation();
    const record = params.state.data;
    const navigate  = useNavigate();
    const { setLoading } = useContext(LoadingContext);

    const handleEditForm = () => {
        openDialog();
    }

    const handleDeleteForm = async () => {
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

    return (
        <>
            <Box sx={{


            }}>
                <Box sx={{
                    display: 'flex',
                }}>
                    <Box sx={{ flexGrow: 1 }}>{record?.request_date}</Box>
                    { (record?.staff_signed_count === 0 ) && <AppIconButton label='Edit Record' icon={<EditIcon color='secondary'/>} onPress={handleEditForm}/>}
                    <AppIconButton label='Delete Record' icon={<DeleteForeverIcon color='warning' />} onPress={handleDeleteForm} />
                </Box>

                <AppText>Eligibility of request: {record.request_status}</AppText>
                <AppText>{record?.reason} Reason for Carry Over</AppText>
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
                <Box sx={{
                    marginY: 2,
                    display: 'flex'
                }}>
                    <AppText>Teacher signature</AppText>
                    <Switch checked={record?.teacher_signed_approve} disabled={true} />
                </Box>

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
                    <AppText>Dean of Student signature</AppText>
                    <Switch checked={record?.dean_signed_approve} disabled={true} />
                </Box>

                <Box sx={{
                    marginY: 2,
                    display: 'flex'
                }}>
                    <AppText>Registrar signature</AppText>
                    <Switch checked={record?.registrar_signed_approve} disabled={true} />
                </Box>

                <Divider />

                {
                    record?.signatures ? (
                        record?.signatures.maps((signature) => {
                            <AppText>{signature.comments}</AppText>
                        })
                    ) : (
                        <AppText variant='h6' color='accent.main'>No Feedback yet</AppText>
                    )

                }



            </Box>
        </>
    );
}

export default CarryOverDetailsComponent;