import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

//Pages
import DoctorDetails from './pages/DoctorDetails';
import Index from './pages/Index';
import PatientDetails from './pages/PatientDetails';
import SignUp from "./pages/SignUp.jsx";
import UserPage from "./pages/UserPage.jsx";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import Synchronization from "./pages/Synchronization";
import DoctorPage from "./pages/DoctorPage";
import HomePage from "./pages/HomePage";
import EstatusDiagnostico from "./Card/EstatusDiagnostico.jsx";
import FormDiagnosticPage from "./pages/FormDiagnosticPage.jsx";
import EstatusDiagnosticoPage from "./pages/EstatusDiagnosticoPage.jsx";

function App() {

  return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Index/>}/>
                    <Route path={'/home'} element={<Index/>}/>
                    <Route path={'/admin'} element={<AdminPage/>}></Route>
                    <Route path={'/homeDoctor'} element={<DoctorPage/>}></Route>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/signUp'} element={<SignUp/>}/>
                    <Route path={'/sync'} element={<Synchronization/>}></Route>
                    <Route path={'/userPage'} element={<UserPage/>}/>
                    <Route path={'/userHome'} element={<HomePage/>}></Route>
                    <Route path={'/test'} element={<FormDiagnosticPage />}/>
                </Routes>
            </BrowserRouter>
        </>

  )
}

export default App;
