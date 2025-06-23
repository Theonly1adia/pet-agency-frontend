import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import MyPets from './pages/MyPets';
import AddPet from './pages/AddPet';
import PetProfile from './pages/PetProfile';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import About from './pages/About';
import SignupForm from './pages/Signup';

function App() {
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    }
  }, [token]); 


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/about" element={<About />} />
        <Route path="/pet/:id" element={<PetProfile />} />
        <Route path="/register" element={<SignupForm />}/>
        //Protected Routes with Token
        <Route path="/my-pets" element={token ? <MyPets /> : <Navigate to="/login" />} />
        <Route path="/add-pet" element={token ? <AddPet /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
