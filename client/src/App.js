import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from "./pages/Login";
import { useAuthContext } from "./hooks/useAuthContext";


function App() {

  const { user } = useAuthContext();

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/"/>}/>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}

export default App;