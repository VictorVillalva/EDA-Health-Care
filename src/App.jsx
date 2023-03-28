import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

//Prueba Componentes
import FormLogin from './components/FormLogin';

//Pages
import Index from './pages/Index';
import SignUp from "./pages/SignUp.jsx";
import UserPage from "./pages/UserPage.jsx";

function App() {

  return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Index/>}/>
                    <Route path={'/home'} element={<Index/>}/>
                    <Route path={'/signUp'} element={<SignUp/>}/>
                    <Route path={'/userPage'} element={<UserPage />}/>
                </Routes>
            </BrowserRouter>
        </>

  )
}

export default App;
