// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function MyPets() {
  return (
    <div>
      <h1>Welcome to PetPals 🐾</h1>
      <p>Help rehome a pet today.</p>
      <Link to="/add-pet">
        <button>Add a Pet</button>
      </Link>
    </div>
  );
}
