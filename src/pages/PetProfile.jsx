import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PetProfile() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/pets/${id}`)
      .then(res => setPet(res.data))
      .catch(err => console.error("Error fetching pet profile:", err));
  }, [id]);

  if (!pet) return <div className="text-center mt-10">Loading pet details...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <img src={pet.image_url} alt={pet.name} className="w-full h-64 object-cover rounded" />
      <h2 className="text-3xl font-bold mt-4">{pet.name}</h2>
      <p className="text-gray-600">{pet.species} • {pet.age} years old</p>
      <p className="mt-4">{pet.description || "No description available."}</p>
      <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
  Adopt Me
</button>

    </div>
    
  );
}
