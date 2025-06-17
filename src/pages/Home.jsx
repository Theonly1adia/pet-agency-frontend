import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const mockPets = [
  {
    id: 1,
    name: "Buddy",
    species: "Dog",
    age: 3,
    image_url: "English-Bulldog.jpg",
  },
  {
    id: 2,
    name: "Whiskers",
    species: "Cat",
    age: 2,
    image_url: "fluffy.jpg",
  },
  
  {
    id:3,
    name: "Banjo",
    species: "Dog",
    age: 5,
    image_url: "Banjo.jpeg"
  }
];

export default function Home() {
  return (
    <>
      <Hero />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Text */}
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold text-purple-600 mb-2">🐾 PetPals Adoption Center</h1>
            <p className="text-gray-600 text-lg">Find your new best friend today.</p>
          </header>

          {/* Recently Added Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recently Added Pets</h2>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {mockPets.map((pet) => (
                <div
                  key={pet.id}
                  className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={pet.image_url}
                    alt={pet.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{pet.name}</h3>
                    <p className="text-gray-500">{pet.species} • {pet.age} years old</p>
                    <Link
                      to={`/pet/${pet.id}`}
                      className="inline-block mt-4 text-purple-600 hover:text-purple-800 font-medium"
                    >
                      View Details →
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
