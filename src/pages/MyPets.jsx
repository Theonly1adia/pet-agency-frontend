import { useEffect, useState } from "react";
import axios from "axios";

export default function MyPets() {
  const [pets, setPets] = useState([]);
  const [editingPet, setEditingPet] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", species: "", age: "", description: "" });

  const token = localStorage.getItem("token");

  const fetchPets = async () => {
    try {
      const res = await axios.get("http://localhost:3000/pets/my-pets", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPets(res.data);
    } catch (err) {
      console.error("Fetch pets error:", err);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/pets/delete-pet/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPets(pets.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const handleEditClick = (pet) => {
    setEditingPet(pet.id);
    setEditForm({
      name: pet.name,
      species: pet.species,
      age: pet.age,
      description: pet.description || "",
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (id) => {
    try {
      await axios.put(`http://localhost:3000/pets/edit-pet/${id}`, editForm, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEditingPet(null);
      fetchPets();
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">My Pets</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pets.map((pet) => (
          <div key={pet.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={pet.image_url} alt={pet.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              {editingPet === pet.id ? (
                <>
                  <input name="name" value={editForm.name} onChange={handleEditChange} className="w-full mb-2 border px-2 py-1" />
                  <input name="species" value={editForm.species} onChange={handleEditChange} className="w-full mb-2 border px-2 py-1" />
                  <input name="age" type="number" value={editForm.age} onChange={handleEditChange} className="w-full mb-2 border px-2 py-1" />
                  <textarea name="description" value={editForm.description} onChange={handleEditChange} className="w-full mb-2 border px-2 py-1" />
                  <div className="flex gap-2">
                    <button onClick={() => handleEditSubmit(pet.id)} className="bg-green-500 text-white px-4 py-1 rounded">Save</button>
                    <button onClick={() => setEditingPet(null)} className="bg-gray-400 text-white px-4 py-1 rounded">Cancel</button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-gray-800">{pet.name}</h2>
                  <p className="text-gray-600 capitalize">{pet.species}</p>
                  <p className="text-gray-600">{pet.age} years old</p>
                  <p className="text-gray-700 text-sm mt-2">{pet.description}</p>
                  <div className="mt-4 flex justify-between">
                    <button onClick={() => handleEditClick(pet)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
                    <button onClick={() => handleDelete(pet.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
