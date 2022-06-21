import React from 'react';
import {useLocation} from "react-router-dom";
import {Box, Divider, Switch} from "@mui/material";
import AppIconButton from "../../../components/AppIconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AppText from "../../../components/AppText";

function PostponedDetailsComponent({ openDialog }) {
    const params = useLocation();
    const record = params.state.data;

    const handleEditForm = () => {
        openDialog();
    }

    const handleDeleteForm = () => {

    }

    return (
        <>
            <Box sx={{


            }}>
                <Box sx={{
                    display: 'flex',
                }}>
                    <Box sx={{ flexGrow: 1 }}>{record?.request_date}</Box>
                    <AppIconButton label='Edit Record' icon={<EditIcon color='secondary' />} onPress={handleEditForm} />
                    <AppIconButton label='Delete Record' icon={<DeleteForeverIcon color='warning' />} onPress={handleDeleteForm} />
                </Box>

                <AppText>Eligibility of request: {record.request_status}</AppText>
                <AppText>{record?.request_reason} Reason for Postpone a Course</AppText>
                <AppText>{record?.description}</AppText>
                <AppText>Semester {record?.semester_of_study}</AppText>

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

                <AppText>{record?.starting_date}</AppText>
                <AppText>{record?.ending_date}</AppText>

                <Divider />

                {
                    record?.signatures ? (
                        record?.signatures.maps((signature) => {
                            <AppText>{signature?.comments}</AppText>
                        })
                    ) : (
                        <AppText variant='h6' color='accent.main'>No Feedback yet</AppText>
                    )

                }



            </Box>
        </>
    );
}

export default PostponedDetailsComponent;