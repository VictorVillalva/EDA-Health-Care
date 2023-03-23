import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

//Pages
import Index from './pages/Index';
import UserSignUp from "./pages/UserSignUp.jsx";

function App() {

  return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Index/>}/>
                    <Route path={'/home'} element={<Index/>}/>
                    <Route path={'/signUp'} element={<UserSignUp/>}/>
                </Routes>
            </BrowserRouter>
        </>
  )
}

export default App;
