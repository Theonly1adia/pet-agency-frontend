import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/pets')
      .then(res => setPets(res.data))
      .catch(err => console.error('Error fetching pets:', err));
  }, []);

  return (
    <>
      <Hero />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold text-purple-600 mb-2">🐾 PetPals Adoption Center</h1>
            <p className="text-gray-600 text-lg">Find your new best friend today.</p>
          </header>

          <section>
            <h2 className="text-2xl font-semibold flex items-center justify-center text-gray-800 mb-6">
              Recently Added Pets
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {pets.map((pet) => (
                <div key={pet.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src={pet.image_url}
                    alt={pet.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{pet.name}</h2>
                    <p className="text-gray-600">
                      {pet.species}, {pet.age} years old
                      <br/>{pet.description}
                    </p>
                    <Link to={`/pet/${pet.id}`}>
                      <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                        View Profile
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
