import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import RegistrationForm from "./pages/RegistrationForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/regisform" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
