export default function About() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-8 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/about2.jpg')" }}
    >
      <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-xl p-10 max-w-3xl w-full">

        <h1 className="text-4xl font-bold text-center text-purple-600 mb-6">
          About Us
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Welcome to our Pet Adoption Center — a space created with love and care
          for animals in need of new homes. Whether you're looking to add a new furry
          friend to your family or you need help finding a new home for a pet you can
          no longer keep, we’re here to help.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          🐾 <strong>Looking to Adopt?</strong> Browse our list of available pets and find
          your perfect match. Each pet listed includes details to help you make a
          thoughtful decision.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          📤 <strong>Need to Rehome a Pet?</strong> You can upload your pet’s information,
          photos, and details, and we’ll list them for adoption on your behalf — no fees,
          no judgment, just help.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Our goal is to create a safe and caring environment where every pet has a chance
          at a loving home. Thank you for being part of the journey!
        </p>
      </div>
    </div>
  );
}
