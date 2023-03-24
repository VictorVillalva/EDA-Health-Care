import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

//Pages
import Index from './pages/Index';
import SignUp from "./pages/SignUp.jsx";
import DiagnosticButton from "./Atom/ButtonDiagnostic.jsx";

function App() {

  return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Index/>}/>
                    <Route path={'/home'} element={<Index/>}/>
                    <Route path={'/signUp'} element={<SignUp/>}/>
                    <Route path={'/test'} element={<DiagnosticButton/>}/>
                </Routes>
            </BrowserRouter>
        </>
  )
}

export default App;
