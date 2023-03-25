import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

//Pages
import Index from './pages/Index';
import SignUp from "./pages/SignUp.jsx";
import UserPage from "./pages/UserPage.jsx";
import HealthStatus from "./components/HealthStatus.jsx";

function App() {

  return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Index/>}/>
                    <Route path={'/home'} element={<Index/>}/>
                    <Route path={'/signUp'} element={<SignUp/>}/>
                    <Route path={'/userPage'} element={<UserPage />}/>
                    <Route path={'/test'} element={<HealthStatus />}/>

                </Routes>
            </BrowserRouter>
        </>
  )
}

export default App;
