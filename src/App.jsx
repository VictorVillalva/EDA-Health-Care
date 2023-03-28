import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

//Pages
import DoctorDetails from './pages/DoctorDetails';
import Index from './pages/Index';
import PatientDetails from './pages/PatientDetails';
import SignUp from "./pages/SignUp.jsx";
import UserPage from "./pages/UserPage.jsx";
import Login from "./pages/Login";

function App() {

  return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Index/>}/>
                    <Route path={'/home'} element={<Index/>}/>
                    <Route path={'/signUp'} element={<SignUp/>}/>
                    <Route path={'/userPage'} element={<UserPage />}/>
                    <Route path={'/doctor'} element={<DoctorDetails />}/>
                    <Route path={'/login'} element={<Login />}/>
                    <Route path={'/patient'} element={<PatientDetails />}/>
                </Routes>
            </BrowserRouter>
        </>

  )
}

export default App;
