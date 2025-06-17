import { useState } from "react";
import axios from "axios";

export default function AddPet() {
  const [form, setForm] = useState({
    name: '',
    species: '',
    age: '',
    image: null,
  });

  const [pet, setPet] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const token = localStorage.getItem("token");

    try {
      const res = await axios.post("http://localhost:3000/pets", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setPet(res.data.pet);
    } catch (err) {
      alert("Failed to upload pet");
      console.error(err);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: "url('/puppies.jpg')" }}
    >
      <div className="bg-white/70 bg-opacity-90 backdrop-blur-sm p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">Add a New Pet</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Pet Name"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            name="species"
            placeholder="Species (e.g., Dog, Cat)"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            name="age"
            type="number"
            placeholder="Age"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            Add Pet
          </button>
        </form>

        {pet && (
          <div className="mt-6 bg-white shadow rounded-xl overflow-hidden">
            <img
              src={pet.image_url}
              alt={pet.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-gray-800">{pet.name}</h2>
              <p className="text-gray-600">
                {pet.species} • {pet.age} years old
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
