import { useState } from 'react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Furr- Ever Friend Finder</h1>
        
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/login" className="hover:underline">Login</a>

        </div>

      
      </div>
    </nav>
  );
}
