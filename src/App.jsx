import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import MyPets from './pages/MyPets';
import AddPet from './pages/AddPet';
import PetProfile from './pages/PetProfile';
import Navbar from './components/Navbar';
import Login from './pages/Login';


function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-pets" element={<MyPets />} />
        <Route path="/add-pet" element={<AddPet />} />
        <Route path="/pet/:id" element={<PetProfile />} />
            </Routes>
        </Router>
    )
}

export default App;