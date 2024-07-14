import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./LoginRegister/Login";
import Register from "./LoginRegister/Register";
import Home from "./LoginRegister/Home";
import Hr from "./Components/Hr";
import Manager from "./Components/Manager";
import Receptionist from "./Components/Receptionist";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="receptionist" element={<Receptionist />}></Route>
          <Route path="manager" element={<Manager />}></Route>
          <Route path="hr" element={<Hr />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
