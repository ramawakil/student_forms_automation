import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import lottie from 'lottie-web';
import loaderAnimation from '../animations/loader.json';
import authApi from "../api/auth";
import {useNavigate} from "react-router-dom";
import UserContext from "../context/userContext";
import {toast} from "react-toastify";


function HomePage(props) {
    const {user, setUser} = React.useContext(UserContext);
    const anime = React.useRef(null);
    const navigate = useNavigate();


    const whichUser = () => {
        // reroute according to label
        if (user.is_student) {
            navigate('/student-requests');
        } else if (user.is_college_staff) {
            navigate('/staff-requests');
        }
        else {
            toast('You are not authorized to access this page');
            toast('Please contact your administrator, you might not be a student or teacher');
            navigate('/login');
        }

    }

    const fetchUser = async () => {
        setTimeout(() => {}, 1000)
        try {
            const res = await authApi.fetchUser();
            setUser(res.data);
        } catch (e) {
            navigate('/login');
        }
    };


    React.useEffect(() => {


        // initialize animation
        lottie.loadAnimation({
            container: anime.current,
            renderer: 'canvas',
            loop: true,
            autoplay: true,
            animationData: loaderAnimation,
        });
       fetchUser();
       // whichUser()

    }, []);

    React.useEffect(() => {
        if (user) {
            whichUser();
        }

    }, [user]);




    return (
        <Container maxWidth='sm'>
            <Box sx={{
                mt: 10,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}>
                <div ref={anime}></div>
            </Box>
            <Typography variant='subtitle1' gutterBottom textAlign='center'>
                Please wait while loading ...
            </Typography>
        </Container>
    );
}

export default HomePage;