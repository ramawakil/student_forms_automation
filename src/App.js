import {Route, Routes} from "react-router-dom";
import LoadingContext from "./app/context/loadingContext";
import AppLoadingScreen from "./app/components/AppLoadingScreen";
import UserContext from "./app/context/userContext";
import {useState} from "react";
import HomePage from "./app/pages/home";
import LoginPage from "./app/pages/loginPage";
import StudentHome from "./app/pages/students/studentHome";
import TeacherHome from "./app/pages/teacher/teacherHome";


function App() {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    return (
        <>
            <LoadingContext.Provider value={{loading, setLoading}}>
                <UserContext.Provider value={{user, setUser}}>
                    {/* here we should have three basic routes for farmer | farm Leader | Company Employee  */}
                    <AppLoadingScreen loading={loading}/>
                    <Routes>
                        <Route path='' element={<HomePage/>}/>
                        <Route path="/login"
                               element={<LoginPage />}/>
                        <Route path="/student-requests/*" element={<StudentHome/>}/>
                        <Route path="/staff-requests/*" element={<TeacherHome/>}/>
                    </Routes>
                </UserContext.Provider>
            </LoadingContext.Provider>
        </>
    );
}

export default App;
