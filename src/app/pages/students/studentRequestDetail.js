import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import PermissionDetailsComponent from "./components/permissionDetailsComponent";

function StudentRequestDetail(props) {
    const params = useLocation();
    // retakes = 0, carry = 1, permission = 2, postponed = 3
    const [request, setRequest] = React.useState(null);
    const obj = params.state.row;


    useEffect(() => {
        console.log(obj);
    }, [])


    return (
        <>
            <PermissionDetailsComponent/>
            {/*{ (request === 'Retake') && <RetakesForm /> }*/}
            {/*{ (request === 'Carry-over') && <CarryOverForm /> }*/}
            {/*{ (request === 'Postponed') && <PostponedForm />  }*/}
            {/*{ (request === 'Permission') && <PermissionForm />  }*/}

        </>
    );
}

export default StudentRequestDetail;